<template>
  <div ref="root">
    <MaoriHead title="線上預約">
      <template #lead>約個時間<br>讓毛孩來毛日放鬆一下<br><small>展示表單 填寫的資料不會送出</small></template>
      <img :src="maoriImg('il-sleep')" alt="" class="art" data-mr="mask">
    </MaoriHead>

    <div class="layout mr-wrap">
      <div class="main">
      <section class="line-book">
        <p><b>用 LINE 預約</b><br>加入官方帳號後傳訊息給我們</p>
        <MaoriLineButton />
      </section>

      <section class="mr-note">
        <ol class="progress" aria-label="預約進度">
          <li v-for="(label, index) in stepNames" :key="label" :class="{ done: index <= step }" :aria-current="index === step ? 'step' : undefined"><span>{{ index + 1 }}</span>{{ label }}</li>
        </ol>

        <!-- One form per step, so the browser only validates the fields on screen. -->
        <form v-if="step < 3" :key="step" @submit.prevent="go(step + 1)">
          <h2 ref="heading" tabindex="-1">{{ step + 1 }}　{{ stepNames[step] }}</h2>

          <template v-if="step === 0">
            <fieldset><legend>寵物類型</legend><label v-for="kind in ['狗狗', '貓咪']" :key="kind" class="choice"><input v-model="form.kind" type="radio" name="kind" :value="kind" required>{{ kind }}</label></fieldset>
            <label>寵物名字<input v-model.trim="form.pet" type="text" required maxlength="20"></label>
            <label>品種<input v-model.trim="form.breed" type="text" required maxlength="30" placeholder="例如 貴賓 米克斯"></label>
            <label>體重 公斤<input v-model="form.weight" type="number" inputmode="decimal" required min="0.5" max="80" step="0.1"></label>
            <label>年齡<select v-model="form.age" required><option value="" disabled>請選擇</option><option>未滿 1 歲</option><option>1–6 歲</option><option>7–10 歲</option><option>11 歲以上</option></select></label>
            <fieldset><legend>是否第一次來店</legend><label v-for="answer in ['是', '否']" :key="answer" class="choice"><input v-model="form.first" type="radio" name="first" :value="answer" required>{{ answer }}</label></fieldset>
          </template>

          <template v-else-if="step === 1">
            <label class="wide">服務項目<select v-model="form.service" required><option value="" disabled>請選擇</option><option v-for="s in maoriServices" :key="s.id" :value="s.id">{{ s.name }}</option></select></label>
            <label>希望日期<input v-model="form.date" type="date" required :min="today" @change="checkDate"></label>
            <fieldset><legend>希望時段</legend><label v-for="time in ['10:00', '13:00', '15:30']" :key="time" class="choice"><input v-model="form.time" type="radio" name="time" :value="time" required>{{ time }}</label></fieldset>
            <label class="wide">特殊注意事項 選填<textarea v-model.trim="form.note" rows="3" maxlength="300" placeholder="健康狀況 怕吹風 怕摸腳等" /></label>
          </template>

          <template v-else>
            <label>飼主姓名<input v-model.trim="form.owner" type="text" required autocomplete="name" maxlength="30"></label>
            <label>手機號碼<input v-model.trim="form.phone" type="tel" required autocomplete="tel" pattern="09[0-9]{2}-?[0-9]{3}-?[0-9]{3}" title="請輸入 09 開頭的 10 碼手機號碼" placeholder="0912345678"></label>
            <dl class="wide">
              <dt>毛孩</dt><dd>{{ form.pet }}　{{ form.kind }}　{{ form.breed }}　{{ form.weight }} 公斤</dd>
              <dt>服務</dt><dd>{{ serviceName }}</dd>
              <dt>時間</dt><dd>{{ form.date }} {{ form.time }}</dd>
            </dl>
          </template>

          <div class="actions wide">
            <button v-if="step" type="button" class="mr-btn is-line" @click="go(step - 1)">上一步</button>
            <button type="submit" class="mr-btn">{{ ['下一步 選擇服務時段', '下一步 確認預約', '送出預約詢問'][step] }}</button>
          </div>
        </form>

        <div v-else class="done-view">
          <MaoriDoodle name="dog" />
          <h2 ref="heading" tabindex="-1">示範完成</h2>
          <p>這是展示網站<br><b>資料沒有送出 也沒有建立預約</b><br>正式網站會在這裡說明店家多久內回覆</p>
          <MaoriLineButton />
          <button type="button" class="mr-btn is-line" @click="restart">重新填寫</button>
        </div>
      </section>
      </div>

      <aside>
        <section class="mr-note notice">
          <h2>預約須知</h2>
          <ul><li>採預約制<br>送出詢問後待店家回覆才算成立</li><li>第一次來店請預留多一點時間</li><li>有病史或特殊照護需求請先告知</li></ul>
        </section>
        <section>
          <h2>常見問題</h2>
          <details v-for="faq in maoriFaqs" :key="faq.q"><summary>{{ faq.q }}</summary><p class="mr-lines">{{ faq.a }}</p></details>
        </section>
        <section>
          <h3>取消與改期</h3><p>請於預約時間 24 小時前告知</p>
          <h3>遲到</h3><p>超過 15 分鐘<br>會依當天狀況調整服務內容或另約時間</p>
        </section>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { maoriFaqs, maoriImg, maoriServices } from '~/data/maori'

definePageMeta({ layout: 'maori', pageTransition: { name: 'mr-page', mode: 'out-in' } })
useSeoMeta({ title: '線上預約｜毛日概念提案', description: '三步驟預約詢問、預約須知與常見問題。展示表單不傳送資料。' })

const stepNames = ['毛孩資料', '服務與時段', '確認預約']
const step = ref(0)
const form = reactive({ kind: '', pet: '', breed: '', weight: '', age: '', first: '', service: '', date: '', time: '', note: '', owner: '', phone: '' })
const serviceName = computed(() => maoriServices.find(s => s.id === form.service)?.name ?? '')

// The page is prerendered, so today's date and the ?service= prefill are only known in the browser.
const today = ref('')
const route = useRoute()
onMounted(() => {
  const now = new Date()
  today.value = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10)
  const wanted = String(route.query.service ?? '')
  if (maoriServices.some(s => s.id === wanted)) form.service = wanted
})
// The shop is closed on Mondays.
function checkDate(event: Event) {
  const input = event.target as HTMLInputElement
  input.setCustomValidity(input.value && new Date(`${input.value}T00:00`).getDay() === 1 ? '週一公休 請選其他日期' : '')
  input.reportValidity()
}

const heading = ref<HTMLElement | null>(null)
async function go(next: number) {
  step.value = next
  await nextTick()
  heading.value?.focus({ preventScroll: true })
  heading.value?.scrollIntoView({ block: 'center' })
}
function restart() {
  Object.assign(form, { kind: '', pet: '', breed: '', weight: '', age: '', first: '', service: '', date: '', time: '', note: '', owner: '', phone: '' })
  go(0)
}

const root = ref<HTMLElement | null>(null)
useMaoriMotion(root)
</script>

<style scoped>
.art { width: min(320px, 100%); }
.layout { display: grid; grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr); gap: clamp(1.5rem, 4vw, 3rem); align-items: start; padding-top: 1rem; }
.progress { display: flex; gap: .75rem; margin-bottom: 1.5rem; }
.progress li { display: grid; flex: 1; justify-items: center; gap: .3rem; padding-bottom: .5rem; border-bottom: 3px dashed var(--kraft); font-size: .9rem; text-align: center; }
.progress li.done { border-bottom: 3px solid var(--caramel); }
.progress span { display: grid; place-items: center; width: 34px; height: 34px; border: 2px solid var(--caramel); border-radius: 50%; }
.progress .done span { background: var(--caramel); color: #fff; }
form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; }
form h2, .wide { grid-column: 1 / -1; }
h2:focus { outline: none; }
label { display: grid; gap: .3rem; font-weight: 500; }
input:not([type='radio']), select, textarea { width: 100%; min-height: 48px; padding: .4rem .75rem; border: 1px solid #8a7663; border-radius: 8px; background: #fff; color: var(--coffee); font: inherit; }
input:user-invalid, select:user-invalid { border: 2px solid #a3321f; }
fieldset { margin: 0; padding: 0; border: 0; }
legend { font-weight: 500; margin-bottom: .3rem; }
.choice { display: inline-flex; align-items: center; gap: .4rem; min-height: 48px; margin-right: 1.4rem; font-weight: 400; cursor: pointer; }
.choice input { width: 20px; height: 20px; accent-color: var(--caramel); }
.actions { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .75rem; }
.actions [type='submit'] { margin-left: auto; }
form dl { display: grid; grid-template-columns: 4em 1fr; margin: 0; border-top: 2px solid var(--wood); }
dt, dd { margin: 0; padding-block: .5rem; border-bottom: 1px dashed var(--wood); }
dt { font-weight: 700; }
.done-view { display: grid; justify-items: center; gap: 1rem; padding-block: 2rem; text-align: center; }
aside { display: grid; gap: 2rem; }
.main { display: grid; gap: 1.5rem; }
.line-book { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .8rem 1.5rem; padding: 1.2rem 1.75rem; border: 2px dashed var(--wood); }
.line-book b { font-family: var(--mr-title); font-size: 1.3rem; }
aside h2 { font-size: 1.5rem; margin-bottom: .6rem; }
.notice { background: #f1e4cb; rotate: 1deg; }
.notice li { padding-block: .45rem; border-bottom: 1px dashed var(--wood); }
details { border-bottom: 1px dashed var(--wood); }
summary { display: flex; justify-content: space-between; gap: 1rem; padding-block: .8rem; cursor: pointer; list-style: none; }
summary::-webkit-details-marker { display: none; }
summary::after { content: '+'; font-size: 1.3rem; line-height: 1.4; }
details[open] summary::after { content: '−'; }
details p { padding-bottom: .9rem; }
aside h3 { font-size: 1.15rem; margin-top: .6rem; }
@media (max-width: 860px) { .layout { grid-template-columns: minmax(0, 1fr); } }
@media (max-width: 560px) { form { grid-template-columns: minmax(0, 1fr); } .mr-note { padding-inline: 1.1rem; } .actions .mr-btn { width: 100%; } .line-book { padding-inline: 1.1rem; } .line-book .mr-line { width: 100%; } }
</style>
