document.addEventListener('DOMContentLoaded', () => {
    // --- Логіка для субменю (залишається без змін) ---
    const allDropdownMainItems = document.querySelectorAll('.dropdown-menu > li');

    allDropdownMainItems.forEach(item => {
        const dropdownItemLink = item.querySelector('.dropdown-item');
        const submenu = item.querySelector('.dropdown-submenu');

        if (dropdownItemLink && submenu) {
            dropdownItemLink.addEventListener('click', (event) => {
                event.preventDefault();

                allDropdownMainItems.forEach(otherItem => {
                    const otherSubmenu = otherItem.querySelector('.dropdown-submenu');
                    if (otherItem !== item && otherItem.classList.contains('active') && otherSubmenu) {
                        otherItem.classList.remove('active');
                    }
                });

                item.classList.toggle('active');


                const isLastMenuItem = item.querySelector('.dropdown-item.ab');

                if (item.classList.contains('active') && isLastMenuItem) {
                    const parentContainer = item.closest('.dropdown-menu-container');

                    if (parentContainer) {
                        setTimeout(() => {
                            const itemTop = item.offsetTop;
                            const itemBottom = itemTop + item.offsetHeight;
                            const visibleBottom =
                                parentContainer.scrollTop + parentContainer.clientHeight;

                            if (itemBottom > visibleBottom) {
                                parentContainer.scrollTop =
                                    itemBottom - parentContainer.clientHeight;
                            }
                        }, 300);
                    }
                }

                /* if (item.classList.contains('active')) {
                    const parentContainer = item.closest('.dropdown-menu-container');
                    if (parentContainer) {
                        setTimeout(() => {
                            const itemTop = item.offsetTop;
                            const itemHeight = item.offsetHeight;
                            const submenuCalculatedHeight = submenu.scrollHeight;

                            const currentScrollTop = parentContainer.scrollTop;
                            const menuVisibleHeight = parentContainer.clientHeight;

                            if ((itemTop + itemHeight + submenuCalculatedHeight) > (currentScrollTop + menuVisibleHeight)) {
                                parentContainer.scrollTop = (itemTop + itemHeight + submenuCalculatedHeight) - menuVisibleHeight;
                            } else if (itemTop < currentScrollTop) {
                                parentContainer.scrollTop = itemTop;
                            }
                        }, 300);
                    }
                } */
            });
        }
    });

    // --- НОВА ПОКРАЩЕНА ЛОГІКА ДЛЯ ГОЛОВНОГО ДРОПДАУНУ (ховер та клік) ---
    const mainDropdownButton = document.querySelector('.dropdown .pr');
    const secDropdownButton = document.querySelector('.dropdown .bb');
    const mainDropdownContainer = document.querySelector('.dropdown'); // Це div з класом .dropdown
    const dropdownMenuContainer = document.querySelector('.dropdown-menu-container'); // Це сам контент меню

    if (mainDropdownButton && secDropdownButton && mainDropdownContainer && dropdownMenuContainer) {
        let isMenuFixedOpen = false; // Відстежуємо, чи меню "закріплене" кліком

        // Обробник кліку на головну кнопку
        mainDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Зупиняємо розповсюдження кліку

            if (isMenuFixedOpen) {
                // Якщо меню вже "закріплене" (відкрите кліком), то клік на кнопку його ЗАКРИВАЄ
                mainDropdownContainer.classList.remove('active');
                isMenuFixedOpen = false;
                closeAllSubmenus(); // Закриваємо всі відкриті субменю
            } else {
                // Якщо меню не "закріплене" (закрите або відкрито ховером), то клік на кнопку його ВІДКРИВАЄ і "закріплює"
                mainDropdownContainer.classList.add('active');
                isMenuFixedOpen = true;
            }
        });

        secDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Зупиняємо розповсюдження кліку

            if (isMenuFixedOpen) {
                // Якщо меню вже "закріплене" (відкрите кліком), то клік на кнопку його ЗАКРИВАЄ
                mainDropdownContainer.classList.remove('active');
                isMenuFixedOpen = false;
                closeAllSubmenus(); // Закриваємо всі відкриті субменю
            } else {
                // Якщо меню не "закріплене" (закрите або відкрито ховером), то клік на кнопку його ВІДКРИВАЄ і "закріплює"
                mainDropdownContainer.classList.add('active');
                isMenuFixedOpen = true;
            }
        });

        // Обробник наведення миші для головного контейнера (включає кнопку та меню)
        mainDropdownContainer.addEventListener('mouseenter', () => {
            // Якщо меню не "закріплене" кліком, відкриваємо його ховером
            if (!isMenuFixedOpen) {
                mainDropdownContainer.classList.add('active');
            }
        });

        // Обробник відведення миші з головного контейнера
        mainDropdownContainer.addEventListener('mouseleave', () => {
            // Якщо меню не "закріплене" кліком, закриваємо його при відведенні миші
            if (!isMenuFixedOpen) {
                mainDropdownContainer.classList.remove('active');
                closeAllSubmenus(); // Закриваємо субменю, коли основне меню закривається ховером
            }
        });

        // Обробник кліку на будь-яке місце документа для закриття меню
        document.addEventListener('click', (event) => {
            // Якщо меню "закріплене" (має клас 'active') І клік був поза головним контейнером дропдауну
            if (isMenuFixedOpen && !mainDropdownContainer.contains(event.target)) {
                mainDropdownContainer.classList.remove('active'); // Закриваємо його
                isMenuFixedOpen = false;
                closeAllSubmenus(); // Закриваємо субменю
            }
        });

        // Допоміжна функція для закриття всіх субменю
        function closeAllSubmenus() {
            allDropdownMainItems.forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        }
    }
});