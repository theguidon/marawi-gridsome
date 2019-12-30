<template>
    <div>
        <HeaderNavbar :title='title' :prev='prev' :next='next' :hideNavbar='hideNavbar'/>
        <slot />
        <Footer />
    </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import HeaderNavbar from '~/components/HeaderNavbar.vue'

export default {
    name: 'PageLayout',
    components: {
        Footer,
        HeaderNavbar,
    },
    props: ['title', 'prev', 'next', 'hideNavbar']
}
</script>

<style scoped>
</style>