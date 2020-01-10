// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css';
import PageLayout from '~/layouts/PageLayout.vue'



export default function (Vue, { router, head, isClient }) {
  Vue.component('PageLayout', PageLayout)

    router.options.scrollBehavior = function(to, from , savedPosition) {
      document.getElementById('app').scrollIntoView();
      return null;
    }

    head.link.push({
      href: 'https://fonts.googleapis.com/css?family=Chivo&display=swap',
      rel: 'stylesheet',
      meta: [
        {name: 'thumbnail', content: {thumbnail}}
      ]

    })
  }
