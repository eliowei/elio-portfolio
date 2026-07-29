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
  description: '專注於 Vue、Nuxt 與現代 Web 開發，提供企業形象網站、活動網站、Landing Page 與 LINE Bot 解決方案。'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Elio Wei',
        jobTitle: 'Frontend Engineer',
        url: 'https://elioflowra.com',
        description:
          'Frontend Engineer specializing in Vue, Nuxt and modern Web development.',
        sameAs: [
          'https://github.com/eliowei',
          'https://www.threads.com/@z220168722'
        ],
      }),
    },
  ],
})
const { data } = await useAsyncData(
  'projects',
  () => queryCollection('projects').order('order', 'ASC').all()
)

const projects = computed(() => data.value)
</script>