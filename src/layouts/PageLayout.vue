<template>
    <div>

        <HeaderNavbar />
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
        HeaderNavbar
    }
}
</script>

<style scoped>
</style>