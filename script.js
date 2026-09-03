const galleryData = {
    'main': [
        { type: 'category', id: 'vitalni', image: 'images/thumb_Вітальні.webp', title: 'Вітальні' },
        { type: 'category', id: 'derevyani-lizhka', image: 'images/thumb_Деревяні-ліжка.webp', title: "Дерев'яні ліжка" },
        { type: 'category', id: 'dyvany', image: 'images/thumb_Дивани.webp', title: 'Дивани прямі і кутові' },
        { type: 'category', id: 'komody', image: 'images/thumb_Комоди.webp', title: 'Комоди' },
        { type: 'category', id: 'kukhni', image: 'images/thumb_Кухні.webp', title: 'Кухні' },
        { type: 'category', id: 'myaki-lizhka', image: 'images/thumb_Мякі-ліжка.webp', title: "М'які ліжка" },
        { type: 'category', id: 'peredpokoyi', image: 'images/thumb_Передпокої.webp', title: 'Передпокої' },
        { type: 'category', id: 'rizne', image: 'images/thumb_різне.webp', title: 'Різне(шафи розпашні, стелажі, полиці, тумби, інше)' },
        { type: 'category', id: 'systemy', image: 'images/thumb_Системи.webp', title: 'Модульні системи для різних кімнат' },
        { type: 'category', id: 'spalni', image: 'images/thumb_Спальні.webp', title: 'Спальні' },
        { type: 'category', id: 'stoly', image: 'images/thumb_Столи.webp', title: 'Столи обідні, письмові, журнальні і крісла' },
        { type: 'category', id: 'tumby-pid-vzuttya', image: 'images/thumb_Тумби-під-взуття.webp', title: 'Тумби під взуття' },
        { type: 'category', id: 'shafy-kupe', image: 'images/thumb_Шафи-купе.webp', title: 'Шафи-купе і гардеробні' }
    ],
    'vitalni': [
        { type: 'set', id: 'vitalni-fabryka-kyivskyi-standart', image: 'images/Вітальні/thumb_Вітальні.-Фабрика-Київський-Стандарт.png', title: 'Вітальні Фабрика Київський Стандарт', file: 'PDF/ВітальніКС.pdf' },
        { type: 'set', id: 'vitalni-fabryka-mebel-servis', image: 'images/Вітальні/thumb_Вітальні-Фабрика.-Мебель-сервіс.png', title: 'Вітальні Фабрика Мебель-сервіс', file: 'PDF/ВітальніМС.pdf' },
        { type: 'set', id: 'vitalni-klasyka-fabryka-myro-mark', image: 'images/Вітальні/thumb_Вітальні-класика.-Фабрика-Миро-Марк.png', title: 'Вітальні класика Фабрика Миро-Марк', file: 'PDF/Вітальні_клас_ММ.pdf' },
        { type: 'set', id: 'vitalni-modern-fabryka-myro-mark', image: 'images/Вітальні/thumb_Вітальні-модерн.-Фабрика-Миро-Марк.png', title: 'Вітальні модерн Фабрика Миро-Марк', file: 'PDF/Вітальні_модерн_ММ.pdf' },
        { type: 'back', title: 'Назад' } 
    ],
    'derevyani-lizhka': [
        { type: 'set', id: 'derevyani-lizhka-GreenLife-fabryka-Kempas', image: 'images/Деревяні-ліжка/thumb_Ліжка-деревяні-GreenLife.-Фабрика-Kempas.png', title: "Дерев'яні ліжка GreenLife Фабрика Kempas", file: 'PDF/Ліжка_дер_Кемпас-GreenLife.pdf' },
        { type: 'set', id: 'derevyani-lizhka-Standart-fabryka-Kempas', image: 'images/Деревяні-ліжка/thumb_Ліжка-деревяні-Standart.-Фабрика-Kempas.png', title: "Дерев'яні ліжка Standart Фабрика Kempas", file: 'PDF/Ліжка_дер_Кемпас_Стандарт.pdf' },
        { type: 'set', id: 'derevyani-lizhka-fabryka-mebigrand', image: 'images/Деревяні-ліжка/thumb_Ліжка-деревяні.-Фабрика-Мебігранд.png', title: "Дерев'яні ліжка Фабрика Мебігранд", file: 'PDF/Ліжка_дер_Мебігранд.pdf' },
        { type: 'set', id: 'derevyani-lizhka-fabryka-mebelservice', image: 'images/Деревяні-ліжка/thumb_Ліжка-деревяні.-Фабрика-Мебель-Сервіс.png', title: "Дерев'яні ліжка Фабрика Мебель Сервіс", file: 'PDF/Ліжка_дер_МС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'dyvany': [
        { type: 'set', id: 'dyvany-kutovi-kyivskyi', image: 'images/Дивани-прямі-і-кутові/thumb_Дивани-кутові.-Фабрика-Київський-Стандарт.png', title: 'Дивани кутові Фабрика Київський Стандарт', file: 'PDF/Дивани_кутові_КС.pdf' },
        { type: 'set', id: 'dyvany-priami-kyivskyi', image: 'images/Дивани-прямі-і-кутові/thumb_Дивани-прямі.-Фабрика-Київський-Стандарт.png', title: 'Дивани прямі Фабрика Київський Стандарт', file: 'PDF/Дивани_прямі_КС.pdf' },
        { type: 'set', id: 'dyvany-kutovi-ms', image: 'images/Дивани-прямі-і-кутові/thumb_Дивани-кутові.-Фабрика-Мебель-Сервіс.png', title: 'Дивани кутові Фабрика Мебель Сервіс', file: 'PDF/Дивани_кутові_МС.pdf' },
        { type: 'set', id: 'dyvany-priami-ms', image: 'images/Дивани-прямі-і-кутові/thumb_Дивани-прямі.-Фабрика-Мебель-Сервіс.png', title: 'Дивани прямі Фабрика Мебель Сервіс', file: 'PDF/Дивани_прямі_МС.pdf' },
        { type: 'set', id: 'dyvany-sokrat', image: 'images/Дивани-прямі-і-кутові/thumb_Дивани-прямі-і-кутові.-Фабрика-Сократ-Свінг.png', title: 'Дивани прямі і кутові Фабрика Сократ Свінг', file: 'PDF/Дивани_прямі_і_кутові_Сократ.pdf' },
        { type: 'set', id: 'dyvanchiki-ms', image: 'images/Дивани-прямі-і-кутові/thumb_Дитячі-диванчики.-Фабрика-Мебель-Сервіс.png', title: 'Диванчики дитячі Фабрика Мебель Сервіс', file: 'PDF/Дитячі_дивани_МС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'komody': [
        { type: 'set', id: 'komodyKs', image: 'images/Комоди/thumb_Комоди.-Фабрика-Київський-Стандарт.png', title: 'Комоди Фабрика Київський Стандарт', file: 'PDF/Комоди_КС.pdf' },
        { type: 'set', id: 'komodyMbgd', image: 'images/Комоди/thumb_Комоди.-Фабрика-Мебігранд.png', title: 'Комоди Фабрика Мебігранд', file: 'PDF/Комоди_Мебігранд.pdf' },
        { type: 'set', id: 'komodyKsR', image: 'images/Комоди/thumb_Комоди-різні.-Фабрика-Київський-Стандарт.png', title: 'Комоди різні Фабрика Київський Стандарт', file: 'PDF/Комоди_різні_КС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'kukhni': [
        { type: 'set', id: 'noviSeriiKS', image: 'images/Кухні/thumb_Нові-серії.png', title: 'Кухні нові серії Фабрика Київський Стандарт', file: 'PDF/Кухні_Нові-серії_КС.pdf' },
        { type: 'set', id: 'seriaDspKS', image: 'images/Кухні/thumb_Серія-ДСП.png', title: 'Кухні Готові рішення Серія ДСП Фабрика Київський Стандарт', file: 'PDF/Кухні-Серія-ДСП-КС.pdf' },
        { type: 'set', id: 'seriaPlivkaKS', image: 'images/Кухні/thumb_Серія-плівка.png', title: 'Кухні Готові рішення Серія Плівка Фабрика Київський Стандарт', file: 'PDF/Кухні-Серія-Плівка-КС.pdf' },
        { type: 'set', id: 'seriaFarbaKS', image: 'images/Кухні/thumb_Серія-фарба.png', title: 'Кухні Готові рішення Серія Фарба Фабрика Київський Стандарт', file: 'PDF/Кухні-Серія-Фарба-КС.pdf' },
        { type: 'set', id: 'modulniKS', image: 'images/Кухні/thumb_Модульні.png', title: 'Кухні Модульні довільного вибору Фабрика Київський Стандарт', file: 'PDF/Кухні_модульні_КС.pdf' },
        { type: 'set', id: 'techInfoKS', image: 'images/Кухні/thumb_Технічна-інформація.png', title: 'Кухні Технічна інформація Фабрика Київський Стандарт', file: 'PDF/Технічна_інфо_КС.pdf' },
        { type: 'set', id: 'kukhniMS', image: 'images/Кухні/thumb_Кухні.-Фабрика-Мебель-Сервіс.png', title: 'Кухні Фабрика Мебель Сервіс', file: 'PDF/Кухні_МС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'myaki-lizhka': [
        { type: 'set', id: 'rizo', image: 'images/Мякі-ліжка-і-крісла/thumb_Мякі-ліжка.-Фабрика-Різо.png', title: "М'які ліжка Фабрика Різо", file: 'PDF/Ліжка_мякі_Різо.pdf' },
        { type: 'set', id: 'myakiLizhkaKS', image: 'images/Мякі-ліжка-і-крісла/thumb_Мякі-ліжка.-Фабрика-Київський-Стандарт.png', title: "М'які ліжка Фабрика Київський Стандарт", file: 'PDF/Мякі-ліжка_КС.pdf' },
        { type: 'set', id: 'myakiKrislaKS', image: 'images/Мякі-ліжка-і-крісла/thumb_Мякі-крісла.-Фабрика-Київський-Стандарт.png', title: "М'які крісла Фабрика Київський Стандарт", file: 'PDF/Мякі_крісла_КС.pdf' },
        { type: 'set', id: 'myakiLizhkaSS', image: 'images/Мякі-ліжка-і-крісла/thumb_Мякі-ліжка.-Фабрика-Сократ-Свінг.png', title: "М'які ліжка і крісла Фабрика Сократ Свінг", file: 'PDF/Ліжка_крісла_Сократ.pdf' },
        { type: 'set', id: 'myakiLizhkaMS', image: 'images/Мякі-ліжка-і-крісла/thumb_Мякі-ліжка.-Фабрика-Мебель-Сервіс.png', title: "М'які ліжка Фабрика Мебель Сервіс", file: 'PDF/Мякі_ліжка_МС.pdf' },
        { type: 'set', id: 'myakiLizhkaMM', image: 'images/Мякі-ліжка-і-крісла/thumb_Мякі-ліжка.-Фабрика-Миро-Марк.png', title: "М'які ліжка Фабрика Миро Марк", file: 'PDF/Мякі-ліжка_ММ.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'peredpokoyi': [
        { type: 'set', id: 'peredpokoyiKS', image: 'images/Передпокої/thumb_Передпокої.-Фабрика-Київський-Стандарт.png', title: 'Передпокої Фабрика Київський Стандарт', file: 'PDF/Передпокої_КС.pdf' },
        { type: 'set', id: 'peredpokoyiMS', image: 'images/Передпокої/thumb_Передпокої.-Фабрика-Мебель-сервіс.png', title: 'Передпокої Фабрика Мебель Сервіс', file: 'PDF/Передпокої_МС.pdf' },
        { type: 'set', id: 'peredpokoyiMM', image: 'images/Передпокої/thumb_Передпокої.-Фабрика-Миро-Марк.png', title: 'Передпокої Фабрика Миро Марк', file: 'PDF/Передпокої_ММ.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'rizne': [
        { type: 'set', id: 'seriiRozpashnyh', image: 'images/Різне/thumb_Серії-шаф-розпашних.-Фабрика-Київський-Стандарт.png', title: 'Серії Шаф розпашних Фабрика Київський Стандарт', file: 'PDF/Серії_шаф_розпашних_КС.pdf' },
        { type: 'set', id: 'rozpRizni', image: 'images/Різне/thumb_Шафи-розпашні-різні.-Фабрика-Київський-Стандарт.png', title: 'Шафи розпашні різні Фабрика Київський Стандарт', file: 'PDF/Шафи-розпашні-різні_КС.pdf' },
        { type: 'set', id: 'decor', image: 'images/Різне/thumb_DecorCollection.png', title: 'Decor Collection Фабрика Миро Марк', file: 'PDF/Decor-Collection_ММ.pdf' },
        { type: 'set', id: 'vishaky', image: 'images/Різне/thumb_Вішаки.png', title: 'Відкриті вішаки Фабрика Київський Стандарт', file: 'PDF/Відкриті-вішалки_КС.pdf' },
        { type: 'set', id: 'dzerkala', image: 'images/Різне/thumb_Дзеркала.png', title: 'Дзеркала Фабрика Київський Стандарт', file: 'PDF/Дзеркала_КС.pdf' },
        { type: 'set', id: 'lizhkaRizni', image: 'images/Різне/thumb_Ліжка-різні.png', title: 'Ліжка різні Фабрика Київський Стандарт', file: 'PDF/Ліжка-різні_КС.pdf' },
        { type: 'set', id: 'polyci', image: 'images/Різне/thumb_Полиці-стелажі.png', title: 'Стелажі, полиці, тумби навісні Фабрика Київський Стандарт', file: 'PDF/Тумби-навісні-полиці-стелажі_КС.pdf' },
        { type: 'set', id: 'tAntre', image: 'images/Різне/thumb_Тумби-на-антресолі.png', title: 'Тумби на антресолі Фабрика Київський Стандарт', file: 'PDF/Тумби-на-антресолі_КС.pdf' },
        { type: 'set', id: 'tNavisni', image: 'images/Різне/thumb_Тумби-навісні.png', title: 'Тумби навісні і полиці навісні Фабрика Київський Стандарт', file: 'PDF/Тумби-навісні-і-полиці-навісні_КС.pdf' },
        { type: 'set', id: 'tPrylizhk', image: 'images/Різне/thumb_Тумби-приліжкові.png', title: 'Тумби приліжкові Фабрика Київський Стандарт', file: 'PDF/Тумби-приліжкові_КС.pdf' },
        { type: 'set', id: 'tTV', image: 'images/Різне/thumb_Тумби-ТБ.png', title: 'Тумби ТБ Фабрика Київський Стандарт', file: 'PDF/Тумби-ТБ_КС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'systemy': [
        { type: 'set', id: 'systemyKS', image: 'images/Модульні-системи-для-різних-кімнат/thumb_Системи.-Фабрика-Київський-Стандарт.png', title: 'Системи Фабрика Київський Стандарт', file: 'PDF/Системи_КС.pdf' },
        { type: 'set', id: 'systemyMS', image: 'images/Модульні-системи-для-різних-кімнат/thumb_Системи.-Фабрика-Мебель-Сервіс.png', title: 'Системи Фабрика Мебель Сервіс', file: 'PDF/Системи_МС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'spalni': [
        { type: 'set', id: 'spalniModMM', image: 'images/Спальні/thumb_Спальні-модерн.-Фабрика-Миро-Марк.png', title: 'Спальні модерн Фабрика Миро Марк', file: 'PDF/Спальні_модерн_ММ.pdf' },
        { type: 'set', id: 'spalniKlMM', image: 'images/Спальні/thumb_Спальні-класика.-Фабрика-Миро-Марк.png', title: 'Спальні класика Фабрика Миро Марк', file: 'PDF/Спальні_класика_ММ.pdf' },
        { type: 'set', id: 'spalniMS', image: 'images/Спальні/thumb_Спальні.-Фабрика-Мебель-Сервіс.png', title: 'Спальні Фабрика Мебель Сервіс', file: 'PDF/Спальні_МС.pdf' },
        { type: 'set', id: 'spalniKS', image: 'images/Спальні/thumb_Спальні.-Фабрика-Київський-Стандарт.png', title: 'Спальні Фабрика Київський Стандарт', file: 'PDF/Спальні_КС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'stoly': [
        { type: 'set', id: 'tysa', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_Столи-крісла.-Фабрика-Тиса.png', title: 'Столи обідні і крісла Фабрика Тиса', file: 'PDF/Столи_Тиса.pdf' },
        { type: 'set', id: 'marko', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_Столи-крісла.-Фабрика-Марко.png', title: 'Столи обідні і крісла Фабрика Марко', file: 'PDF/Столи_Марко.pdf' },
        { type: 'set', id: 'modul', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_modul.png', title: 'Столи обідні і крісла та інше Фабрика Модуль Люкс', file: 'PDF/modul_lux.pdf' },
        { type: 'set', id: 'stolyOKS', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_Столи-обідні.-Фабрика-Київський-Стандарт.png', title: 'Столи обідні Фабрика Київський Стандарт', file: 'PDF/Столи_КС.pdf' },
        { type: 'set', id: 'stolyMS', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_Столи-крісла.-Фабрика-Мебель-Сервіс.png', title: 'Столи(і письмові і журнальні), крісла Фабрика Мебель Сервіс', file: 'PDF/Столи_МС.pdf' },
        { type: 'set', id: 'stolyPKS', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_Столи-письмові.-Фабрика-Київський-Стандарт.png', title: 'Столи письмові Фабрика Київський Стандарт', file: 'PDF/Столи_письмові_КС.pdf' },
        { type: 'set', id: 'office', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_Меблі-для-офісу.-Фабрика-Київськи-Стандарт.png', title: 'Меблі для офісу Фабрика Київський Стандарт', file: 'PDF/Меблі-для-офісу._КС.pdf' },
        { type: 'set', id: 'stolyRizKS', image: 'images/Столи-різні+меблі-для-офісу-та-крісла/thumb_Столи-різні.-Фабрика-Київський-Стандарт.png', title: 'Столи різні Фабрика Київський Стандарт', file: 'PDF/Столи-різні_КС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'tumby-pid-vzuttya': [
        { type: 'set', id: 'tumbyVztKS', image: 'images/Тумби-під-взуття/thumb_Тумби-для-взуття.-Фабрика-Київський-Стандарт.png', title: 'Тумби для взуття Фабрика Київський Стандарт', file: 'PDF/Тумби-під-взуття-різні_КС.pdf' },
        { type: 'set', id: 'tumbyVztMS', image: 'images/Тумби-під-взуття/thumb_Тумби-для-взуття.-Фабрика-Мебель-Сервіс.png', title: 'Тумби для взуття Фабрика Мебель Сервіс', file: 'PDF/Тумби-під-взуття_МС.pdf' },
        { type: 'back', title: 'Назад' }
    ],
    'shafy-kupe': [
        { type: 'set', id: 'harderobniKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Гардеробні.-Фабрика-Київський-Стандарт.png', title: 'Гардеробні кімнати Фабрика Київський Стандарт', file: 'PDF/Гардеробні-кімнати_КС.pdf' },
        { type: 'set', id: 'shKiGardbnMM', image: 'images/Шафи-купе-і-гардеробні/thumb_Шафи-купе-і-гардеробні.-Фабрика-Миро-Марк.png', title: 'Шафи-купе і гардеробні Фабрика Миро Марк', file: 'PDF/Шафи-купе-і-гардиробні_ММ.pdf' },
        { type: 'set', id: 'shKzNadTonkymPrBavariaKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Надтонкий-профіль-Баварія.png', title: 'Шафи-купе "Баварія" Фабрика Київський Стандарт', file: 'PDF/Шафи-купе-з-надтнк-пр-Баварія_КС.pdf' },
        { type: 'set', id: 'shafy2hKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Двохдверні.png', title: 'Шафи-купе 2-дверні Фабрика Київський Стандарт', file: 'PDF/ШК2Дв_КС.pdf' },
        { type: 'set', id: 'shafy3hKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Трьохдверні.png', title: 'Шафи-купе 3-дверні Фабрика Київський Стандарт', file: 'PDF/ШК3Дв_КС.pdf' },
        { type: 'set', id: 'shafy4hKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Чотирьохдверні.png', title: 'Шафи-купе 4-дверні Фабрика Київський Стандарт', file: 'PDF/ШК4Дв_КС.pdf' },
        { type: 'set', id: 'shafy5yKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Пятидверні.png', title: "Шафи-купе 5-дверні Фабрика Київський Стандарт", file: 'PDF/ШК5Дв_КС.pdf' },
        { type: 'set', id: 'shafy6yKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Шестидверні.png', title: 'Шафи-купе 6-дверні Фабрика Київський Стандарт', file: 'PDF/ШК6Дв_КС.pdf' },
        { type: 'set', id: 'KzKS', image: 'images/Шафи-купе-і-гардеробні/thumb_Кутові-закінчення.png', title: 'Кутові закінчення Фабрика Київський Стандарт', file: 'PDF/Шафи-купе-КЗ_КС.pdf' },
        { type: 'set', id: 'kinoman', image: 'images/Шафи-купе-і-гардеробні/thumb_Кіноман.png', title: 'Шафи-кіноман Фабрика Київський Стандарт', file: 'PDF/Шафи-купе-Кіноман_КС.pdf' },
        { type: 'set', id: 'shafyKutovi', image: 'images/Шафи-купе-і-гардеробні/thumb_Кутові.png', title: 'Шафи-купе кутові Фабрика Київський Стандарт', file: 'PDF/Шафи-купе-кутові_КС.pdf' },
        { type: 'set', id: 'kombinacii', image: 'images/Шафи-купе-і-гардеробні/thumb_Комбінації-фасадів.png', title: 'Комбінації фасадів Фабрика Київський Стандарт', file: 'PDF/Матеріали_комб.фасадів_КС.pdf' },
        { type: 'back', title: 'Назад' }
    ]
};


function renderCategoriesMenu(menuKey = 'main') {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';
    const items = galleryData[menuKey] || [];

    // Оформлення контейнера для меню
    categoriesDiv.style.display = 'flex';
    categoriesDiv.style.flexWrap = 'wrap';
    categoriesDiv.style.gap = '24px';
    categoriesDiv.style.justifyContent = 'center';
    categoriesDiv.style.flexDirection = 'row';

    // Додаємо кнопку "Назад", якщо не головне меню
    if (menuKey !== 'main') {
        // Створюємо окремий рядок для кнопки "Назад"
        const backRow = document.createElement('div');
        backRow.style.cssText = `
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 24px;
        `;
        const backBtn = document.createElement('button');
        backBtn.style.cssText = `
            width: 300px; height: 60px;
            background: #fff;
            border: 2px solid #00391F;
            outline: none;
            cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            padding: 0;
            border-radius: 8px;
            font-size: 1.1em;
            font-family: 'Inter',sans-serif;
        `;
        backBtn.innerHTML = `<svg width="36" height="36"><polyline points="26,8 10,18 26,28" style="fill:none;stroke:#00391F;stroke-width:2"/></svg> <span style="margin-left:10px;">Назад</span>`;
        backBtn.onclick = () => {
            let parentMenu = 'main';
            for (const key in galleryData) {
                if (galleryData[key].some(i => i.id === menuKey)) {
                    parentMenu = key;
                    break;
                }
            }
            renderCategoriesMenu(parentMenu);
        };
        backRow.appendChild(backBtn);
        categoriesDiv.appendChild(backRow);
    }

    // Відображаємо категорії та підкатегорії
    items.forEach(item => {
        if (item.type !== 'category' && item.type !== 'set') return;
        const catDiv = document.createElement('div');
        catDiv.style.cssText = `
            width: 300px; height: 200px; 
            border: 2px solid #00391F; 
            border-radius: 8px;
            overflow: hidden;
            background: #fff;
            display: flex; flex-direction: column; 
            align-items: center; justify-content: flex-end;
            position: relative;
            cursor: pointer;
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
            transition: box-shadow 0.2s, border-color 0.2s;
            margin: 12px;
        `;
        catDiv.onmouseenter = () => {
            catDiv.style.boxShadow = '0 4px 16px 0 rgba(0,57,31,0.15)';
            catDiv.style.borderColor = '#00bfff';
        };
        catDiv.onmouseleave = () => {
            catDiv.style.boxShadow = '0 2px 8px 0 rgba(0,0,0,0.06)';
            catDiv.style.borderColor = '#00391F';
        };

        catDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;display:block;">
            <div style="
                position:absolute;bottom:0;left:0;right:0;
                background:rgba(0,57,31,0.7);
                color:#fff;
                font-size:1.1em;
                font-family:'Inter',sans-serif;
                font-weight:400;
                text-align:center;
                padding:12px 8px 10px 8px;
                letter-spacing:0.01em;
                line-height:1.2;
            ">${item.title}</div>
        `;

        catDiv.onclick = () => {
            if (item.type === 'category' && galleryData[item.id]) {
                renderCategoriesMenu(item.id);
            } else if (item.type === 'set') {
                if (item.file) {
                    window.open(item.file, '_blank');
                } else {
                    alert('Файл ще не додано!');
                }
            }
        };

        categoriesDiv.appendChild(catDiv);
    });
}

// Для ініціалізації меню:
renderCategoriesMenu('main');




/* зміна кольору svg */
const dropElement = document.querySelector('.dropdown');
const svg1Element = document.querySelector('.s1');
const svg2Element = document.querySelector('.s2');
const svg3Element = document.querySelector('.s3');

if (dropElement) {
    dropElement.addEventListener('mouseover', function() {
        svg1Element.setAttribute('stroke', '#fff');
        svg2Element.setAttribute('stroke', '#fff');
        svg3Element.setAttribute('stroke', '#fff');
    });

    dropElement.addEventListener('mouseout', function() { 
        svg1Element.setAttribute('stroke', '#00391F');
        svg2Element.setAttribute('stroke', '#00391F');
        svg3Element.setAttribute('stroke', '#00391F');
    });
}


