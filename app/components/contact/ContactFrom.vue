<template>
  <section id="inquiry-form" class="sheet inquiry-body" aria-label="合作洽詢表單">
    <aside class="inquiry-sidebar">
      <div class="paper-note inquiry-paper inquiry-service-note">
        <h2 class="tape-label">網站建置服務</h2>
        <ul>
          <li><UIcon name="i-lucide-square-check-big" aria-hidden="true" /> 品牌形象網站</li>
          <li><UIcon name="i-lucide-square-check-big" aria-hidden="true" /> 服務介紹頁 / Landing Page</li>
          <li><UIcon name="i-lucide-square-check-big" aria-hidden="true" /> LINE OA 功能擴充評估</li>
        </ul>
        <p>延伸服務<br>LINE 官方帳號內容管理整合</p>
      </div>
      <p class="paper-note inquiry-paper inquiry-tip">如果你已經有網站、品牌資料或參考範例，也可以一併提供，讓我們更快釐清需求。</p>

      <svg class="contact-scenery inquiry-tip-leaves" viewBox="0 0 88 98" aria-hidden="true">
        <path d="M8 93C25 78 42 54 57 13m-18 44C23 57 12 47 8 33c16-1 30 8 31 24Zm8-16c17 0 31-8 38-22-16-3-32 6-38 22Zm8-16C43 21 43 11 48 2c8 5 12 15 7 23ZM27 73C16 72 8 66 3 55c13-2 25 6 24 18Zm3-4c12 7 26 6 37-5-13-5-25-4-37 5Z" />
        <path class="contact-leaf-hatch" d="m13 37 19 15m23-16 22-13M9 59l13 10m16 0 19-3m-7-59 6 13" />
      </svg>
    </aside>
    <UForm
      :schema="schema"
      :state="state"
      class="inquiry-fields"
      @submit="onSubmit"
    >
      <div class="inquiry-pair">
        <!-- Name -->
        <UFormField
          name="name"
          label="您的姓名"
          required
        >
          <UInput
            v-model="state.name"
            placeholder="王小明" autocomplete="name"
            size="xl"
            class="w-full"
            :ui="fieldUi"
          />
        </UFormField>

        <!-- Email -->
        <UFormField
          name="email"
          label="電子郵件"
          required
        >
          <UInput
            v-model="state.email"
            type="email"
            autocomplete="email"
            placeholder="xxxxx@gmail.com"
            size="xl"
            class="w-full"
            :ui="fieldUi"
          />
        </UFormField>
      </div>

      <!-- Project Type -->
      <UFormField
        name="projectType"
        label="專案類型"
        required
      >
        <USelect
          v-model="state.projectType"
          :items="projectOptions"
          placeholder="請選擇服務項目"
          size="xl"
          class="w-full cursor-pointer"
          :ui="selectUi"
        />
      </UFormField>

      <!-- Budget -->
      <UFormField
        name="budget"
        label="預算區間（選填）"
      >
        <USelect
          v-model="state.budget"
          :items="budgetOptions"
          placeholder="請選擇預算"
          size="xl"
          class="w-full cursor-pointer"
          :ui="selectUi"
        />
      </UFormField>

      <!-- Message -->
      <UFormField
        name="message"
        label="訊息內容"
        required
      >
        <UTextarea
          v-model="state.message"
          :rows="6"
          placeholder="請描述品牌或服務、網站用途、參考網站及預計上線時間。若需要 LINE OA 整合，也可在這裡說明。"
          class="w-full"
          :ui="fieldUi"
        />
      </UFormField>

      <div class="inquiry-submit">
        <p>你提供的資料將用於回覆本次需求與合作聯繫，通常 1–2 個工作天內回覆。詳見<NuxtLink to="/privacy" class="inquiry-privacy-link">隱私權說明</NuxtLink>。</p>
        <div class="inquiry-submit-action">
          <UButton type="submit" :loading="loading" trailing-icon="i-lucide-arrow-right" class="ink-button inquiry-submit-button">發送諮詢</UButton>
          <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="m3 11 4-8m5 13 9-7m-5 14 9-2" />
          </svg>
        </div>
      </div>
    </UForm>
    <NuxtImg src="/images/sketchbook/pose-run.webp" alt="" width="232" height="320" loading="lazy" class="inquiry-runner" />
    <svg class="inquiry-trail" viewBox="0 0 800 75" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M5 67C112 66 154 18 258 28s140 48 235 28S620 5 790 12" />
    </svg>
  </section>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { sendMail } = useContact()
const { trackContactSubmit } = useAnalytics()

const fieldUi = {
  base: 'inquiry-control',
  placeholder: 'inquiry-placeholder',
  trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
}
const selectUi = {
  ...fieldUi,
  content: 'inquiry-select-options',
  item: 'inquiry-select-option',
  itemTrailingIcon: 'inquiry-select-check'
}
const schema = z.object({
  name: z.string().min(2, '請輸入姓名'),
  email: z.string().email('Email 格式錯誤'),
  projectType: z.string().min(1, '請選擇專案類型'),
  budget: z.string().optional(),
  message: z.string().min(1, '請輸入內容')
})

type Schema = z.infer<typeof schema>

const state = reactive<Schema>({
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: ''
})

const projectOptions = [
  {
    label: '品牌形象網站',
    value: 'corporate'
  },
  {
    label: '個人品牌網站',
    value: 'personal'
  },
  {
    label: '活動介紹頁',
    value: 'event'
  },
  {
    label: '單頁網站（服務／產品介紹）',
    value: 'landing'
  },
  {
    label: 'LINE 官方帳號內容管理整合',
    value: 'line_oa_template'
  },
  {
    label: 'LINE OA 進階整合需求',
    value: 'line_oa_advanced'
  },
  {
    label: '還不確定，想先討論',
    value: 'consultation'
  },
  {
    label: '其他需求',
    value: 'other'
  }
]

const route = useRoute()
watch(() => route.query.service, service => {
  state.projectType = projectOptions.find(option => option.value === service)?.value ?? ''
}, { immediate: true })

const budgetOptions = [
  {
    label: '尚未確定',
    value: 'unknown'
  },
  {
    label: '3萬以下',
    value: 'under_30k'
  },
  {
    label: '3 ~ 5萬',
    value: '30k_50k'
  },
  {
    label: '5 ~ 10萬',
    value: '50k_100k'
  },
  {
    label: '10萬以上',
    value: '100k_plus'
  }
]

const loading = ref(false)

async function onSubmit(
  event: FormSubmitEvent<Schema>
) {
  loading.value = true

  try {
    await sendMail(event.data)
    trackContactSubmit(state.projectType,state.budget)

    useToast().add({
      title: '送出成功',
      description: '我會盡快與您聯繫。',
      color: 'primary'
    })

    Object.assign(state, {
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: ''
    })
  }
  catch (error) {
    console.error(error)

    useToast().add({
      title: '送出失敗',
      description: '請稍後再試一次。',
      color: 'error'
    })
  }
  finally {
    loading.value = false
  }
}

</script>