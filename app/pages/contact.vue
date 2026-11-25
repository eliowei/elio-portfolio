<template>
  <SketchbookFrame>
    <main id="main" class="sketchbook-contact">
      <svg class="contact-scenery inquiry-hero-leaves" viewBox="0 0 88 98" aria-hidden="true">
          <path d="M8 93C25 78 42 54 57 13m-18 44C23 57 12 47 8 33c16-1 30 8 31 24Zm8-16c17 0 31-8 38-22-16-3-32 6-38 22Zm8-16C43 21 43 11 48 2c8 5 12 15 7 23ZM27 73C16 72 8 66 3 55c13-2 25 6 24 18Zm3-4c12 7 26 6 37-5-13-5-25-4-37 5Z" />
          <path class="contact-leaf-hatch" d="m13 37 19 15m23-16 22-13M9 59l13 10m16 0 19-3m-7-59 6 13" />
      </svg>
      <ContactHero />
      <ContactFrom />
      <ContactProcess />
    </main>
  </SketchbookFrame>
</template>

<script setup>
definePageMeta({ layout: false })

const config = useRuntimeConfig()

useSeoMeta({
  title: '網站建置與整合洽詢 | Elio Wei',
  description: '提供品牌形象網站、服務介紹頁與 Landing Page 建置，LINE OA 整合依需求評估。歡迎提供網站用途、參考網站與預計時程。',
  ogTitle: '網站建置與整合洽詢 | Elio Wei',
  ogDescription: '提供品牌形象網站、服務介紹頁與 Landing Page 建置，LINE OA 整合依需求評估。歡迎提供網站用途、參考網站與預計時程。',
  ogUrl: `${config.public.siteUrl}/contact`,
  ogType: 'website',
  ogImage: `${config.public.siteUrl}/images/og-image-v2.jpg`
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