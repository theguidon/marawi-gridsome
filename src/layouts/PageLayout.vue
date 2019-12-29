<template>
    <div>
        <HeaderNavbar :title='title' :prev='prev' :next='next'/>
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
    props: ['title', 'prev', 'next']
}
</script>

<style scoped>
</style>