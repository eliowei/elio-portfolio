<template>
  <SketchbookHome :projects="projects" />
</template>

<script setup>
const config = useRuntimeConfig()
definePageMeta({ layout: false })

useSeoMeta({
  title: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  description: '為小型品牌與專業服務者提供品牌形象網站與一頁式網站／活動頁建置，並依需求評估 LINE OA／LINE Bot 整合與客製化功能。',
  ogTitle: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  ogDescription: '為小型品牌與專業服務者提供品牌形象網站與一頁式網站／活動頁建置，並依需求評估 LINE OA／LINE Bot 整合與客製化功能。',
  ogUrl: `${config.public.siteUrl}/`,
  ogType: 'website',
  ogSiteName: 'Elio Wei',
  ogImage: `${config.public.siteUrl}/images/og-image-v2.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  twitterDescription: '為小型品牌與專業服務者提供品牌形象網站與一頁式網站／活動頁建置，並依需求評估 LINE OA／LINE Bot 整合與客製化功能。',
  twitterImage: `${config.public.siteUrl}/images/og-image-v2.jpg`
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}/`
    }
  ],
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
          'Brand websites, landing pages and LINE Official Account integrations.',
        sameAs: [
          'https://github.com/eliowei',
          'https://www.instagram.com/z220168722/',
          'https://www.threads.com/@z220168722'
        ],
      }),
    },
  ]
})
const { data } = await useAsyncData(
  'projects',
  () => queryCollection('projects').order('order', 'ASC').all()
)

const projects = computed(() => [...(data.value ?? [])].sort((a, b) => (a.slug === 'personal-portfolio' ? 0 : a.type === 'product' ? 1 : 2) - (b.slug === 'personal-portfolio' ? 0 : b.type === 'product' ? 1 : 2)))
</script>