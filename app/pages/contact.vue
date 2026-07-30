<template>
  <ContactHero/>
  <ContactFrom/>
  <ContactProcess/>
</template>

<script setup>
const config = useRuntimeConfig()

useSeoMeta({
  title: '聯繫我 | Elio Wei',
  description: '如果你有網站、品牌頁、Landing Page 或系統開發需求，歡迎與我聯繫。',
  ogTitle: '聯繫我 | Elio Wei',
  ogDescription: '如果你有網站、品牌頁、Landing Page 或系統開發需求，歡迎與我聯繫。',
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
        name: '聯繫我 | Elio Wei',
        url: `${config.public.siteUrl}/contact`,
        description: '如果你有網站、品牌頁、Landing Page 或系統開發需求，歡迎與我聯繫。',
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