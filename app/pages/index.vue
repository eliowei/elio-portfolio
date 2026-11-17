<template>
  <div>
    <HeroSection />

    <LazyAboutSection />
    <LazyFeaturedProjects  :projects="projects" />
    <ServiceDetails />
    <LazyContactSection  />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  description: '為小型品牌與專業服務者提供品牌形象網站、服務介紹頁與 Landing Page 建置，並依需求評估 LINE OA 與內容管理整合。',
  ogTitle: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  ogDescription: '為小型品牌與專業服務者提供品牌形象網站、服務介紹頁與 Landing Page 建置，並依需求評估 LINE OA 與內容管理整合。',
  ogUrl: `${config.public.siteUrl}/`,
  ogType: 'website',
  ogSiteName: 'Elio Wei',
  ogImage: `${config.public.siteUrl}/images/og-image.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Elio Wei｜品牌網站建置與 LINE OA 整合',
  twitterDescription: '為小型品牌與專業服務者提供品牌形象網站、服務介紹頁與 Landing Page 建置，並依需求評估 LINE OA 與內容管理整合。',
  twitterImage: `${config.public.siteUrl}/images/og-image.png`
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