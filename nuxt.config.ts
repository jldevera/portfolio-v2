// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },
  
  // App configuration
  app: {
    baseURL: '/portfolio-v2/',
    head: {
      title: 'JL Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal developer portfolio showcasing projects and skills' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://rsms.me' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
      ]
    }
  },
  
  // Runtime config
  runtimeConfig: {
    // public: {
    //   // siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    // }
  }
})
