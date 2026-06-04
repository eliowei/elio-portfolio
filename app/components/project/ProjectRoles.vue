<template>
<section class="mb-32">
  <div class="mb-12">
    <h2 class="text-[13px] uppercase tracking-widest text-secondary border-l-2 border-primary pl-4">Platform Roles</h2>
  </div>
  <div class="space-y-4">
    <div v-for="(item, index) in roles" :key="index" class="flex flex-col md:flex-row gap-gutter p-8 bg-white border border-outline-variant items-center">
      <div class="md:w-1/3">
        <span class="text-[13px] px-2 py-1 bg-primary text-white">{{ index + 1 }} / {{roleType[index]}}</span>
        <h3 class="text-4xl mt-4 font-bold">{{ item.title }}</h3>
      </div>
      <div class="md:w-2/3">
        <p class="text-base text-secondary">{{ item.description }}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
interface Roles {
  title: string
  description: string
}

const roleType = ['PARTICIPANT', 'ORGANIZER', 'ADMINISTRATOR']

defineProps<{
  roles: Roles[]
}>()

</script>