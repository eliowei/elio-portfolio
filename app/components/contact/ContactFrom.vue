<template>
  <section class="bg-surface-container">
    <div class="max-w-7xl mx-auto px-6 md:px-16 py-32 contact-form">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Branding/Context Sidebar (Swiss Style) -->
      <div class="hidden lg:block lg:col-span-4">
      <div class="sticky top-32 space-y-12">
        <div>
          <h3 class="text-[13px] uppercase text-primary mb-4">核心服務</h3>
          <ul class="space-y-2 text-secondary font-body-md">
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> 企業官網</li>
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> 活動網站</li>
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> LINE OA 公版方案</li>
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> LINE OA 功能擴充評估</li>
          </ul>
        </div>
        <div class="p-8 bg-surface-container-low border border-outline-variant rounded-lg">
          <p class="italic text-secondary leading-relaxed">
            「精準並非偶然。它始於高度的專注、真誠的努力、明智的方向與熟練的執行。」
          </p>
        </div>
        </div>
        </div>
        <!-- Main Inquiry Form -->
        <div class="lg:col-span-8">
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-12"
            @submit="onSubmit"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Name -->
              <UFormField
                name="name"
                label="您的姓名"
                required
              >
                <UInput
                  v-model="state.name"
                  placeholder="王小明"
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
                :ui="fieldUi"
              />
            </UFormField>

            <!-- Budget -->
            <UFormField
              name="budget"
              label="預算區間"
              required
            >
              <USelect
                v-model="state.budget"
                :items="budgetOptions"
                placeholder="請選擇預算"
                size="xl"
                class="w-full cursor-pointer"
                :ui="fieldUi"
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
                placeholder="請簡短描述您的專案目標、需求或想法。"
                class="w-full"
                :ui="fieldUi"
              />
            </UFormField>

            <!-- CTA -->
            <div
              class="
                flex
                flex-col
                md:flex-row
                items-center
                justify-between
                gap-8
                pt-4
              "
            >
              <p class="text-xs text-secondary">
                點擊發送即表示您同意我們的聯繫隱私條款。
              </p>

              <UButton
                type="submit"
                :loading="loading"
                size="xl"
                color="neutral"
                variant="solid"
                class="
                  min-w-45
                  justify-center
                  font-semibold
                  cursor-pointer
                  px-12 py-4
                "
              >
                發送諮詢
              <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
              </UButton>
            </div>

          </UForm>
        </div>
      </div>
    </div>
</section>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { sendMail } = useContact()
const { reveal } = useReveal()
const { trackContactSubmit } = useAnalytics()

const fieldUi = {
  base: 'ring-outline-variant bg-surface-container-lowest placeholder:text-secondary-fixed-dim focus-visible:ring-1 p-4 hover:bg-surface',
  placeholder: 'text-outline-variant',
  trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
}
const schema = z.object({
  name: z.string().min(2, '請輸入姓名'),
  email: z.string().email('Email 格式錯誤'),
  projectType: z.string().min(1, '請選擇專案類型'),
  budget: z.string().min(1, '請選擇預算'),
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
    label: '企業形象網站',
    value: 'corporate'
  },
  {
    label: '個人品牌網站',
    value: 'personal'
  },
  {
    label: '活動網站',
    value: 'event'
  },
  {
    label: 'Landing Page',
    value: 'landing'
  },
  {
    label: 'LINE OA 公版方案',
    value: 'line_oa_template'
  },
  {
    label: 'LINE OA 進階整合需求',
    value: 'line_oa_advanced'
  },
  {
    label: '專案諮詢',
    value: 'consultation'
  },
  {
    label: '其他需求',
    value: 'other'
  }
]

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

onMounted(() => {
  reveal({
    selector: '.contact-form',
    trigger: '.contact-form',
    y: 40,
    duration: 0.8
  })

  reveal({
    selector: '.sticky',
    trigger: '.contact-form',
    x: -20,
    duration: 0.8
  })
})

</script>