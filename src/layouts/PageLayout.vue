<template>
    <div>
        <HeaderNavbar :title='title'/>
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
    props: ['title']
}
</script>

<style scoped>
</style>