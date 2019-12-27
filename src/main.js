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

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'
  // })

  // head.script.push({
  //   src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'
  // })
}
