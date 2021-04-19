const THEME_HTML = require('./themes/html');
const THEME_JS = require('./themes/js');
const THEME_PHP = require('./themes/php');

const { PATH_HTML, PATH_JS, PATH_PHP } = require('./constants/paths');
const getSidebarObj = require('./utils/sidebar');

const NAV = [
	{ text: '1. HTML & CSS', link: PATH_HTML },
	{ text: '2. JavaScript', link: PATH_JS },
	// { text: '3. PHP & MySQL', link: PATH_PHP },
];

module.exports = {
	themeConfig: {
		nav: NAV,
		sidebar: {
			[PATH_HTML]: getSidebarObj(THEME_HTML),
			[PATH_JS]: getSidebarObj(THEME_JS),
			[PATH_PHP]: getSidebarObj(THEME_PHP),
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