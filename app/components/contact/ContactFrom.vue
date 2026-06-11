<template>
  <section class="bg-surface">
    <div class="max-w-7xl mx-auto px-16 py-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Branding/Context Sidebar (Swiss Style) -->
      <div class="hidden lg:block lg:col-span-4">
      <div class="sticky top-32 space-y-12">
        <div>
          <h3 class="text-[13px] uppercase text-primary mb-4">核心服務</h3>
          <ul class="space-y-2 text-secondary font-body-md">
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> 企業官網</li>
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> 活動網站</li>
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> LINE Bot 模板方案</li>
            <li class="flex items-center gap-2"><span class="w-1 h-1 bg-primary"></span> 客製化 LINE 整合</li>
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
          <form class="space-y-12" @submit.prevent="onSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Name -->
              <div class="space-y-2 group">
                <label class="text-[13px] uppercase text-secondary group-focus-within:text-primary transition-colors" for="name">
                  您的姓名 <span class="text-error">*</span>
                </label>
                <input class="w-full bg-surface-container-lowest border border-outline-variant px-4 py-4 rounded focus:ring-0 focus:border-primary outline-none text-body-md placeholder:text-secondary-fixed-dim" id="name" v-model="form.name" placeholder="王小明" required type="text"/>
              </div>
              <!-- Email -->
              <div class="space-y-2 group">
                <label class="text-[13px] uppercase text-secondary group-focus-within:text-primary transition-colors" for="email">
                  電子郵件 <span class="text-error">*</span>
                </label>
                <input class="w-full bg-surface-container-lowest border border-outline-variant px-4 py-4 rounded focus:ring-0 focus:border-primary outline-none text-body-md placeholder:text-secondary-fixed-dim" id="email" v-model="form.email" placeholder="xxxxx@gmail.com" required type="email"/>
              </div>
            </div>
          <!-- Project Type -->
            <div class="space-y-2 group">
              <label class="text-[13px] uppercase text-secondary group-focus-within:text-primary transition-colors" for="project_type">
                專案類型 <span class="text-error">*</span>
              </label>
            <div class="relative">
            <select class="appearance-none w-full bg-surface-container-lowest border border-outline-variant px-4 py-4 rounded focus:ring-0 focus:border-primary outline-none text-body-md text-primary cursor-pointer" id="project_type" v-model="form.projectType" required>
              <option value="" disabled selected>請選擇服務項目...</option>
              <option value="corporate">企業形象網站</option>
              <option value="personal">個人品牌網站</option>
              <option value="event">活動網站</option>
              <option value="landing">Landing Page</option>
              <option value="line_oa">LINE OA 公版方案</option>
              <option value="line_oa_custom">LINE OA 客製化功能</option>
              <option value="consultation">專案諮詢</option>
              <option value="other">其他需求
              </option>
            </select>
            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <span class="material-symbols-outlined text-secondary">expand_more</span>
            </div>
            </div>
            </div>
          <!-- budget -->
            <div class="space-y-2 group">
              <label class="text-[13px] uppercase text-secondary group-focus-within:text-primary transition-colors" for="project_type">
                預算區間 <span class="text-error">*</span>
              </label>
            <div class="relative">
            <select class="appearance-none w-full bg-surface-container-lowest border border-outline-variant px-4 py-4 rounded focus:ring-0 focus:border-primary outline-none text-body-md text-primary cursor-pointer" id="budget" v-model="form.budget" required>
              <option value="" disabled selected>
              請選擇預算
              </option>

              <option value="under_30k">
              3萬以下
              </option>

              <option value="30k_50k">
              3~5萬
              </option>

              <option value="50k_100k">
              5~10萬
              </option>

              <option value="100k_plus">
              10萬以上
              </option>
            </select>
            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <span class="material-symbols-outlined text-secondary">expand_more</span>
            </div>
            </div>
            </div>
          <!-- Message -->
            <div class="space-y-2 group">
            <label class="text-[13px]uppercase text-secondary group-focus-within:text-primary transition-colors" for="message">
              訊息內容 <span class="text-error">*</span>
            </label>
            <textarea class="w-full bg-surface-container-lowest border border-outline-variant px-4 py-4 rounded focus:ring-0 focus:border-primary outline-none text-body-md placeholder:text-secondary-fixed-dim custom-scrollbar" id="message" v-model="form.message" placeholder="請簡短描述您的專案目標、需求或想法。" require rows="6"></textarea>
            </div>
          <!-- CTA -->
            <div class="flex flex-col md:flex-row items-center justify-between gap-gutter pt-4">
            <p class="text-xs text-secondary">
              點擊發送即表示您同意我們的聯繫隱私條款。
            </p>
            <button class="w-full md:w-auto bg-primary text-on-primary px-12 py-4 rounded-lg font-body-md font-semibold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2" :disabled="loading" type="submit">
              {{ loading ? '送出中...' : '發送諮詢' }}
              <span
                v-if="!loading"
                class="material-symbols-outlined text-[20px]"
              >
                arrow_forward
              </span>
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</section>
</template>

<script setup lang="ts">

const { sendMail } = useContact()

const form = reactive({
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: ''
})

const loading = ref(false)

const onSubmit = async () => {
  loading.value = true

  try {
    await sendMail(form)

    alert('成功送出')

    Object.assign(form, {
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: ''
    })
  }
  catch (error) {
    console.error(error)
    alert('寄送失敗')
  }
  finally {
    loading.value = false
  }
}

</script>