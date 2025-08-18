// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // Enable static site generation
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  
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
      title: 'Jerome Louie De Vera',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio showcasing projects and skills' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/portfolio-v2/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/portfolio-v2/logo.png' },
        { rel: 'apple-touch-icon', href: '/portfolio-v2/logo.png' },
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
