<template>
    <main v-if="project" class="bg-surface" >
      <ProductTemplate
        v-if="project.type === 'product'"
        :project="project"
      />

      <ProjectTemplate
        v-else
        :project="project"
      />
    </main> 
</template>

<script setup>
const route = useRoute()

const { data: project } = await useAsyncData(
  route.params.slug,
  () =>
    queryCollection('projects')
      .path(`/projects/${route.params.slug}`)
      .first()
)

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found',
    fatal: true
  })
}

const config = useRuntimeConfig()

useSeoMeta({
  title: () => `${project.value?.title ?? ''} | Elio Wei`,
  description: () => project.value?.description,
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.description,
  ogUrl: () => `${config.public.siteUrl}/projects/${route.params.slug}`,
  ogType: 'article',
  ogSiteName: 'Elio Wei',
  ogImage: () => `${config.public.siteUrl}${project.value?.cover}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => project.value?.title,
  twitterDescription: () => project.value?.description,
  twitterImage: () => `${config.public.siteUrl}${project.value?.cover}`
})
useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}/projects/${route.params.slug}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.value?.title,
        description: project.value?.description,
        url: `${config.public.siteUrl}/projects/${route.params.slug}`,
        image: `${config.public.siteUrl}${project.value?.cover}`,
        author: {
          '@type': 'Person',
          name: 'Elio Wei'
        }
      })
    }
  ]
})
</script>