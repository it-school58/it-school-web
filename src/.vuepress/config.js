const THEME_HTML = require('./themes/html');
const THEME_JS = require('./themes/js');
const THEME_PHP = require('./themes/php');
const THEME_LINKS = require('./themes/links');

const { PATH_HTML, PATH_JS, PATH_PHP, PATH_LINKS } = require('./constants/paths');
const getSidebar = require('./utils/sidebar');

const NAV = [
	{ text: '1. HTML & CSS', link: PATH_HTML },
	{ text: '2. JavaScript', link: PATH_JS },
	{ text: 'Ссылки',        link: PATH_LINKS },
	// { text: '3. PHP & MySQL', link: PATH_PHP },
];

module.exports = {
	themeConfig: {
		nav: NAV,
		sidebar: {
			[PATH_HTML]: getSidebar(THEME_HTML, true),
			[PATH_JS]: getSidebar(THEME_JS, true),
			[PATH_PHP]: getSidebar(THEME_PHP, true),
			[PATH_LINKS]: getSidebar(THEME_LINKS),
		},
		search: false,
	},
	base: '/webcourses/',
	title: 'Школа программирования',
	head: [
		['link', { rel: 'icon', href: '/favicon.svg' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],
	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
	]
}
