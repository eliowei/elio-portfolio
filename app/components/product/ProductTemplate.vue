<template>
<div class="max-w-7xl mx-auto px-16 pt-16 pb-32 relative">

<!-- Sidebar Meta Labels -->
<!-- 1. Hero Section -->
    <ProductHero
      :order="project.order"
      :title="project.title"
      :description="project.description"
      :highlights="project.highlights"
      :year="project.year"
      :category="project.category"
      :tags="project.tags"
      :github="project.github"
      :demo="project.demo"
      :cover="project.cover"
    />

    <ProductProblem 
        :problem="project.problem"
    />

    <ProductBenefits
        :benefits="project.benefits" />

    <ProductShowcase 
        :showcase="project.showcase"/>

    <ProductGallery 
        :gallery="project.gallery"/>
    
    <ProductIndustries 
        :industries="project.industries"
    />

    <ProductPricing 
        :price="project.product.pricing"/>

    <ProductFAQ 
        :faq="project.product.faq"
    />
    
    <ProductCTA 
        :cta="project.product.cta"
    />
</div>
</template>


<script setup>

defineProps({
    project: Object
})
</script>