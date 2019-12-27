<template>
    <PageLayout title="Continued Displacement">
<div class="temporary">
<!-- code for the page here -->
</div>
        <CardsSection />
    </PageLayout>
</template>

<script>
import CardsSection from '~/components/CardsSection'
export default {
    name: "ContinuedDisplacement",
  metaInfo: {
    title: "ContinuedDisplacement",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { charset: "UTF-8" },
      { httpEquiv: "X-UA-Compatible", content: "ie=edge" }
    ],
    link: [
      
    ],
    
  },
  components: {
      CardsSection
    }
}
</script>

<style scoped>
/* css for the page here */
.temporary{
    height: 60px;
}
</style>