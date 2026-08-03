<template>
  <section class="bg-surface-container py-32 process-section">
    <div class="max-w-7xl mx-auto px-6 md:px-16">

      <!-- Header -->
      <div class="text-center mb-24">
        <h2 class="text-4xl text-primary mb-4">
          從想法到上線
        </h2>

        <p class="text-secondary max-w-xl mx-auto">
          透過清晰的流程與溝通，
          協助您將想法轉化為實際產品。
        </p>
      </div>

      <!-- Process -->
      <div
        class="
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-12
          lg:gap-8
        "
      >
        <!-- Step 01 -->
        <div
          class="
            process-item
            flex
            flex-col
            items-center
            text-center
            max-w-60
          "
        >
          <span class="font-label-mono text-label-mono text-primary">
            01
          </span>

          <span
            class="
              text-body-md
              font-bold
              text-primary
              mt-3
            "
          >
            諮詢與需求確認
          </span>

          <p
            class="
              text-caption
              text-secondary
              mt-3
            "
          >
            了解品牌定位、專案目標、
            預算範圍與預期成果。
          </p>
        </div>

        <!-- Arrow -->
        <UIcon name="material-symbols:arrow-forward" class="size-6 process-arrow hidden lg:block text-secondary opacity-50" />
        <!-- Step 02 -->
        <div
          class="
            process-item
            flex
            flex-col
            items-center
            text-center
            max-w-60
          "
        >
          <span class="font-label-mono text-label-mono text-primary">
            02
          </span>

          <span
            class="
              text-body-md
              font-bold
              text-primary
              mt-3
            "
          >
            規劃與報價
          </span>

          <p
            class="
              text-caption
              text-secondary
              mt-3
            "
          >
            提供功能規劃、技術建議、
            開發時程與報價方案。
          </p>
        </div>

        <!-- Arrow -->
        <UIcon name="material-symbols:arrow-forward" class="size-6 process-arrow hidden lg:block text-secondary opacity-50" />

        <!-- Step 03 -->
        <div
          class="
            process-item
            flex
            flex-col
            items-center
            text-center
            max-w-60
          "
        >
          <span class="font-label-mono text-label-mono text-primary">
            03
          </span>

          <span
            class="
              text-body-md
              font-bold
              text-primary
              mt-3
            "
          >
            開發與交付
          </span>

          <p
            class="
              text-caption
              text-secondary
              mt-3
            "
          >
            完成開發、測試與上線，
            並提供後續維護建議。
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const { reveal } = useReveal()

onMounted(() => {
  reveal({
    selector: '.process-item',
    trigger: '.process-section',
    y: 30,
    stagger: 0.15,
    start: 'top 50%'
  })

  reveal({
    selector: '.process-arrow',
    trigger: '.process-section',
    x: -10,
    opacity: 0,
    stagger: 0.15,
    start: 'top 50%'
  })
})
</script>