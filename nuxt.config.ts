// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      css: [
        '@/assets/css/main.css',
        '@/assets/css/fontawesome-all.css',
        '@/assets/css/swiper.css',
        '@/assets/css/magnific-popup.css',
        '@/assets/css/styles.css',
      ],
})
