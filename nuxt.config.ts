// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', '@nuxt/content', 'nuxt-studio'],
	future: {
		compatibilityVersion: 4,
	},
	// devServer: {
	// 	port: 80,       // 修改为 80
	// 	host: '0.0.0.0' // 允许外部访问，如果只在本机访问可以用 'localhost'
	// },
	// app: {
	// 	pageTransition: { name: 'page', mode: 'out-in' },
	// },

	// app: {
	// 	head: {
	// 		htmlAttrs: {
	// 			lang: 'en',
	// 		},
	// 	},
	// },

	i18n: {
		locales: [
			{ code: 'en', file: 'header-en.json', name: 'English' },
			{ code: 'en', file: 'footer-en.json', name: 'English' },
			{ code: 'zh', file: 'header-zh.json', name: 'Chinese' },
			{ code: 'zh', file: 'footer-zh.json', name: 'English' },
		],
		// strategy: 'prefix_and_default',
		strategy: 'prefix_except_default',
		defaultLocale: 'en',
		// detectBrowserLanguage: {
		// 	useCookie: true,
		// 	cookieKey: 'i18n_redirected',
		// 	cookieSecure: false,
		// 	redirectOn: 'root',
		// 	alwaysRedirect: false,
		// 	cookieCrossOrigin: false
		// },
	},



	// 添加 nitro 配置进行预渲染,删除这两行代码，则直接在url访问新闻详细内容的时候会出现404错误
	nitro: {
		preset: 'node-server',
		serveStatic: true
	},

	routeRules: {
		// 新闻页面全部由服务器实时渲染（SSR）
		'/news/**': { ssr: true },
		// 其他所有页面依旧静态化（SSG）
		'/**': { prerender: true }
	},



	studio: {
		route: '/_studio',  // 默认
		// development : { 
		//   sync : true  // 启用开发模式
		// } ,
		// 您的配置
		repository: {
			provider: 'github',  // 默认值：目前仅支持 GitHub 
			owner: 'yc970127',  // 您的 GitHub 所有者
			repo: 'aisoga',  // 您的 GitHub 仓库名称
			branch: 'master',
			// rootDir : ''  // 可选：您的内容应用的目录
		}
	},

	runtimeConfig: {
		// The private keys which are only available server-side
		STUDIO_GITHUB_CLIENT_ID: import.meta.env.STUDIO_GITHUB_CLIENT_ID, // 仅服务器端可访问
		STUDIO_GITHUB_CLIENT_SECRET: import.meta.env.STUDIO_GITHUB_CLIENT_SECRET, // 仅服务器端可访问
		// Keys within public are also exposed client-side
		// public: {
		//   apiBase: import.meta.env.API_BASE,
		// },
	},


	// ssr: true,
	// runtimeConfig: {
	// 	public: {
	// 		apiBase: import.meta.env.API_BASE//客户端可访问
	// 	},
	// },
	css: [
		'bootstrap/dist/css/bootstrap.min.css',
		'bootstrap-icons/font/bootstrap-icons.css',
		'~/assets/main.css'
	],
})