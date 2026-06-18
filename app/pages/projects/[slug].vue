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
  ogImage: () => `${config.public.siteUrl}${project.value?.cover}`
})

</script>