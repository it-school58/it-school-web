const PATH_MODULE = 'module1';

const ARR_MODULE = [
    {
        title: 'Введение',
        themes: [
            ['intro',      'Введение и основные понятия'],
            ['structure',  'Структура HTML файла'],
            ['path',       'Задание пути к файлам'],
        ],
    },
    {
        title: 'Основы',
        themes: [
            ['colors',               'Цвета CSS (стандартные, hex, rgb)'],
            ['inline',               'Строчные элементы (span)'],
            ['block',                'Блочные элементы (div)'],
            ['opacity',              'Прозрачность элементов'],
            ['px',                   'Единицы измерения'],
            ['adaptive-design',      'Адаптивная верстка'],
            ['vars',                 'Переменные в CSS'],
        ]
    },
    {
        title: 'Основные элементы',
        themes: [
            ['text',   'Текст и шрифты'],
            ['img',    'Изображения'],
            ['list',   'Списки'],
            ['link',   'Ссылки'],
            ['form',   'Формы'],
            ['table',  'Таблицы'],
            ['video',  'Видео и аудио'],
        ]
    },
    {
        title: 'Разметка',
        themes: [
            ['float',              setTheme(1, ['float'])],
            ['inline-block',       setTheme(1, ['inline-block'])],
            ['flexbox',            'Flexbox'],
            ['css-grid',           'CSS Grid'],
            ['css-multi-columns',  'CSS Multi Columns'],
        ]
    },
    {
        title: 'Преобразования',
        themes: [
            ['transition',   setTheme(1, ['transition'])],
            ['transform',    setTheme(1, ['transform'])],
            ['filters',      setTheme(1, ['filter', 'backdrop-filter'])],
            ['animation',    setTheme(1, ['animation'])],
            ['clip-path',    setTheme(1, ['clip-path'])],
            ['css-shapes',   'CSS Shapes'],
            ['svg',          'SVG'],
        ]
    },
    {
        title: 'CSS-свойства',
        themes: [
            ['box-sizing',  setTheme(1, ['box-sizing'])],
            ['display',     setTheme(1, ['display'])],
            ['position',    setTheme(1, ['position'])],
            ['calc',        setTheme(1, ['calc'])],
            ['import',      setTheme(1, ['@import'])],
        ]
    },
    {
        title: 'Селекторы',
        themes: [
            ['selector-basic',  setTheme(1, ['class', 'id', 'tag'])],
            ['selector-attr',   setTheme(1, ['attr'])],
            ['selector-tilda',  setTheme(1, ['>', '+', '~'])],
        ]
    },
    {
        title: 'Псевдоклассы и псевдоэлементы',
        themes: [
            ['pseudo-hover',         setTheme(1, ['hover', 'focus', 'active', '...'])],
            ['pseudo-child-element', setTheme(1, ['first-child', 'nth-child', '...'])],
            ['pseudo-before',        setTheme(1, ['before', 'after'])],
        ]
    },
    {
        title: 'HTML-теги',
        themes: [
            ['layout-html5', 'Теги HTML5 для разметки документа'],
            ['fieldset',     setTheme(1, ['&lt;fieldset&gt;'])],
        ]
    },
    {
        title: 'Инструменты',
        themes: [
            ['yandex-map',        'Яндекс Карты и Google Maps'],
            ['yandex-metrika',    'Яндекс Метрика'],
            ['online-editors',    'Онлайн редакторы кода'],
            ['preproc',           'Препроцессоры CSS (Sass)'],
            ['emmet',             'Плагин Emmet'],
            ['bootstrap',         'Bootstrap (компоненты и модульная сетка)'],
            ['bem',               'БЭМ и другие методологии верстки'],
            ['pixel-perfect',     'Pixel Perfect'],
            ['chrome-dev-tools',  'Chrome DevTools'],
            ['photoshop',         'Adobe Photoshop для верстальщика'],
            ['vk',                'Виджеты ВКонтакте'],
            ['github',            'Хостинг проектов GitHub'],
            ['vendor',            'Вендорные префиксы. Автопрефиксер'],
            ['structure-project', 'Организация структуры проекта'],
            ['web-servises',      'Ссылки на полезные ресурсы'],
        ]
    },
];

//['timeweb',              'Регистрация домена и хостинга на Timeweb'],
//['adaptive-menu',        'Создание адаптивного меню на CSS'],
//['font-awesome',         'Иконочный шрифт Font Awesome'],

// Препроцессоры HTML
// Parallax эффект на CSS
// Трансформация в CSS (transform). 3D преобразования
// Adobe Illustrator для верстальщика (рисование SVG)
// iframe (seamless) стилизация плеера YouTube
// Определение геолокации

