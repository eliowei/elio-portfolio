<template>
  <div>
    <HeroSection />
    <ProjectsMarquee />
    <AboutSection />
    <FeaturedProjects :projects="projects" />
    <TechStack />
    <ContactSection />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Elio Wei | Frontend Engineer',
  description: '專注於 Vue、Nuxt、TypeScript 與產品開發。'
})

const { data } = await useAsyncData(
  'projects',
  () => queryCollection('projects').order('order', 'ASC').all()
)

const projects = computed(() => data.value)
</script>