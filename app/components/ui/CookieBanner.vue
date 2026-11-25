<template>
  <aside id="cookie-consent" class="cookie-note" role="region" aria-label="Cookie 使用說明">
    <p class="cookie-note-title">關於分析 Cookie</p>
    <p class="cookie-note-text">
      本網站想使用分析 Cookie 了解大家怎麼瀏覽，作為改善內容的參考。你同意之後才會載入，不同意也能完整使用網站。
      <NuxtLink to="/privacy">隱私權說明</NuxtLink>
    </p>
    <div class="cookie-note-actions">
      <button type="button" class="cookie-note-button" @click="reject">不同意</button>
      <button type="button" class="cookie-note-button cookie-note-button--accept" @click="accept">同意</button>
    </div>
  </aside>
</template>

<script setup lang="ts">
const emit = defineEmits<{ accept: [], reject: [] }>()

const accept = () => emit('accept')
const reject = () => emit('reject')
</script>

<style scoped>
/* Standalone colours: the banner lives outside .sketchbook, so the site's CSS variables are not available here. */
.cookie-note {
  position: fixed;
  z-index: 50;
  right: 1.25rem;
  bottom: 1.25rem;
  width: min(23rem, calc(100vw - 2rem));
  padding: 1rem 1.1rem 1.1rem;
  background: #fffefc url('/images/sketchbook/paper.webp');
  background-blend-mode: multiply;
  border: 1px solid #a68f78;
  border-radius: 2% 3% 3% 2% / 4% 3% 5% 2%;
  box-shadow: 2px 3px 0 #8e6c483b, 0 10px 24px #5a3d2a22;
  color: #332d28;
  font-family: "Noto Sans TC", "Microsoft JhengHei", sans-serif;
  font-size: .9rem;
  line-height: 1.55;
}
.cookie-note-title { margin: 0 0 .25rem; font-weight: 700; font-size: 1rem; }
.cookie-note-text { margin: 0; color: #5f5148; }
.cookie-note-text a { color: #9e432c; text-decoration: underline; text-underline-offset: .2em; white-space: nowrap; }
.cookie-note-actions { display: flex; gap: .6rem; margin-top: .85rem; }
/* Both choices look equally important: declining is as easy as accepting. */
.cookie-note-button {
  flex: 1;
  min-height: 44px;
  padding: .45rem 1rem;
  border: 1px solid #9e432c;
  border-radius: 10% 7% 10% 8% / 22% 28% 19% 25%;
  background: transparent;
  color: #9e432c;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
.cookie-note-button--accept { background: #ad432d; color: #fff9ef; }
.cookie-note-button:hover { text-decoration: underline; text-underline-offset: .25em; }
.cookie-note-button:focus-visible, .cookie-note-text a:focus-visible { outline: 2px solid #9e432c; outline-offset: 3px; }

@media (max-width: 600px) {
  .cookie-note { right: .75rem; bottom: .75rem; left: .75rem; width: auto; }
}

.cookie-enter-active, .cookie-leave-active { transition: opacity .3s, transform .3s; }
.cookie-enter-from, .cookie-leave-to { opacity: 0; transform: translateY(16px); }
@media (prefers-reduced-motion: reduce) {
  .cookie-enter-active, .cookie-leave-active { transition: none; }
}
</style>
