// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: 'https://fonts.googleapis.com',
          rel: 'preconnect',
        },
        {
          href: 'https://fonts.gstatic.com',
          rel: 'preconnect',
          crossorigin: ''
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap',
          rel: 'stylesheet'
        },
        {
          href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
          rel: 'stylesheet',
        }
      ]
    },
    rootAttrs: {
      id: 'app'
    }
  },
  components: [
    '~/views/components'
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.min.css',
    '~/assets/css/style.css'
  ],
  devtools: { enabled: true },
  dir: {
    layouts: './views/layouts',
    pages: './views/pages',
    public: '../public',
  },
  srcDir: './src'
})
