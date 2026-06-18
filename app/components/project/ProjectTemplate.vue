<template>
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
</template>

<script setup>
defineProps({
  project: Object
})

</script>