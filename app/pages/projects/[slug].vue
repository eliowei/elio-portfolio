<script setup>
const route = useRoute()

const { data: project } = await useAsyncData(
  route.params.slug,
  () =>
    queryCollection('projects')
      .path(`/projects/${route.params.slug}`)
      .first()
)
</script>

<template>
    <main v-if="project" class="max-w-7xl mx-auto px-16 pt-16 pb-32" >
      <ProjectHero
        :order="project.order"
        :title="project.title"
        :description="project.description"
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

      <ProjectRoles
        :roles="project.roles"
      />

      <ProjectChallenges
        :challenges="project.challenges"
      />

      <ProjectGallery
        :images="project.gallery"
      />
    </main> 
</template>