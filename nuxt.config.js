export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxtdemo',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
    ],
    publicRuntimeConfig: {
        axios: {
            baseURL: 'https://api.apiopen.top/'
        }
    },
    // axios: {
    //     proxy: true
    // },
    // server: {
    //     port: 3000, // default: 3000
    //     host: '0.0.0.0', // default: localhost
    // },
    // proxy: {
    //     '/api': {
    //         target: 'https://api.apiopen.top/',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/api': '/'
    //         }
    //     }
    // },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}