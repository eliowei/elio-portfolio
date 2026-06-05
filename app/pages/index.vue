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
  title: 'Elio Wei',
  description: 'Frontend Engineer'
})

const { data } = await useAsyncData(
  'projects',
  () => queryCollection('projects').order('order', 'ASC').all()
)

const projects = computed(() => data.value)
</script>