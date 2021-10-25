export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'interview-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/coing-192.png' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/dotenv'],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {},
  server: {
    host: process.env.SERVER_IP,
    port: process.env.SERVER_PORT
  }
};
