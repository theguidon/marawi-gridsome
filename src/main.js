// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css';
import PageLayout from '~/layouts/PageLayout.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('PageLayout', PageLayout)

  head.link.push({
    href: 'https://fonts.googleapis.com/css?family=Chivo&display=swap',
    rel: 'stylesheet'
  })

  router.scrollBehavior = function(to, from, savedPosition) {
    // ...
    return {x:0, y:0}
  }

}
