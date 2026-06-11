<template>
    <main v-if="project" class="bg-surface" >
      <div class="max-w-7xl mx-auto px-16 pt-16 pb-32 ">
        <ProjectHero
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

        <ProjectOverview
          :overview="project.overview"
          :responsibilities="project.responsibilities"
        />

        <ProjectTechStack
          :tech-stack="project.techStack"
        />

        <ProjectShowcase
          :showcase="project.showcase"
        />

        <ProjectImplementation
          v-if="project.implementation?.length"
          :implementation="project.implementation"
        />

        <ProjectIndustries
          v-if="project.industries?.length"
          :sections="project.industries"
        />

        <ProjectChallenges
          v-if="project.challenges?.length"
          :challenges="project.challenges"
        />

        <ProjectSystemDesign
          v-if="project.systemDesign?.length"
          :systemDesign="project.systemDesign"
        />

        <ProjectGallery
          :gallery="project.gallery"
        />
      </div>
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
const config = useRuntimeConfig()

useSeoMeta({
  title: () => `${project.value?.title ?? ''} | Elio Wei`,
  description: () => project.value?.description,
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.description,
  ogImage: () => `${config.public.siteUrl}${project.value?.cover}`
})

</script>