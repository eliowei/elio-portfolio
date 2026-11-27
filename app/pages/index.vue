<template>
  <SketchbookHome :projects="projects" />
</template>

<script setup>
const config = useRuntimeConfig()
definePageMeta({ layout: false })

// Search engines flag descriptions that are too short (Bing suggests 150-160 characters). Chinese results are
// cut off earlier, so the services come first.
const description = 'Elio Wei 為小型品牌與專業服務者提供品牌形象網站、一頁式網站與活動頁建置，支援手機版面並包含基礎 SEO 設定，也可依需求評估 LINE 官方帳號、LINE Bot 整合與客製化功能。從需求討論、規劃設計、開發實作到測試上線，協助你把想法整理成清楚好用的網站。歡迎瀏覽作品案例，聊聊你的需求。'

useSeoMeta({
  title: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  description,
  ogTitle: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  ogDescription: description,
  ogUrl: `${config.public.siteUrl}/`,
  ogType: 'website',
  ogSiteName: 'Elio Wei',
  ogImage: `${config.public.siteUrl}/images/og-image-v2.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  twitterDescription: description,
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

// The order field in each project file decides the order on the home page.
const projects = computed(() => data.value ?? [])
</script>