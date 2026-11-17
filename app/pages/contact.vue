<template>
  <ContactHero/>
  <ContactFrom/>
  <ContactProcess/>
</template>

<script setup>
const config = useRuntimeConfig()

useSeoMeta({
  title: '網站建置與整合洽詢 | Elio Wei',
  description: '提供品牌形象網站、服務介紹頁與 Landing Page 建置，LINE OA 整合依需求評估。歡迎提供網站用途、參考網站與預計時程。',
  ogTitle: '網站建置與整合洽詢 | Elio Wei',
  ogDescription: '提供品牌形象網站、服務介紹頁與 Landing Page 建置，LINE OA 整合依需求評估。歡迎提供網站用途、參考網站與預計時程。',
  ogUrl: `${config.public.siteUrl}/contact`,
  ogType: 'website',
  ogImage: `${config.public.siteUrl}/images/og-image.png`
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}/contact`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: '網站建置與整合洽詢 | Elio Wei',
        url: `${config.public.siteUrl}/contact`,
        description: '提供品牌形象網站、服務介紹頁與 Landing Page 建置，LINE OA 整合依需求評估。歡迎提供網站用途、參考網站與預計時程。',
        inLanguage: 'zh-Hant',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Elio Wei',
          url: config.public.siteUrl
        },
        mainEntity: {
          '@type': 'Person',
          name: 'Elio Wei',
          jobTitle: 'Frontend Engineer',
          url: config.public.siteUrl
        }
      })
    }
  ]
})
</script>