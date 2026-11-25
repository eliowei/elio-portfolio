<template>
  <footer class="bg-washi border-t border-paperBorder">
    <div class="flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-16 max-w-7xl mx-auto gap-8">

      <!-- LEFT -->
      <div class="flex flex-col items-center md:items-start gap-2">
        <span class="studio-serif text-2xl text-primary font-semibold">
          Elio Wei
        </span>

        <span class="font-label-mono uppercase text-secondary">
          © 2026 ELIO WEI. 品牌網站建置 · LINE OA 整合
        </span>
      </div>

      <!-- RIGHT LINKS -->
      <div class="flex flex-wrap justify-center gap-2">
        <NuxtLink class="footer-icon" to="/contact" aria-label="合作洽詢" title="合作洽詢"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></svg></NuxtLink>
        <a class="footer-icon" aria-label="Instagram" title="Instagram" href="https://www.instagram.com/z220168722/" target="_blank" rel="noopener noreferrer" @click="trackSocialClick('instagram')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        <a class="footer-icon" aria-label="Threads 脆" title="Threads 脆" href="https://www.threads.com/@z220168722" target="_blank" rel="noopener noreferrer" @click="trackSocialClick('threads')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.4 7.7C18.4 3.9 15.9 2 12 2 6.4 2 3.5 5.5 3.5 12S6.4 22 12 22c5 0 8.5-2.7 8.5-6.5 0-3.5-3.1-5.5-7.5-5.5-3.4 0-5.1 1.5-5.1 3.5 0 1.7 1.3 2.9 3.3 2.9 2.8 0 4.1-1.8 4.1-5.2 0-3.1-1.4-4.8-3.9-4.8-1.5 0-2.7.6-3.5 1.7"/></svg></a>
        <a class="footer-icon" aria-label="Email" title="Email" href="mailto:zxc160604@gmail.com" @click="trackSocialClick('email')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg></a>
        <NuxtLink class="footer-icon" to="/#hero" aria-label="回到首頁頂部" title="回到頂部">↑</NuxtLink>
      </div>

    </div>
  </footer>
</template>

<script setup>
const { trackSocialClick } = useAnalytics()
</script>
<style scoped>
.footer-icon { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border: 1px solid transparent; border-radius: 50%; color: var(--color-secondary); transition: color 180ms ease, border-color 180ms ease, background-color 180ms ease; }
.footer-icon svg { width: 21px; height: 21px; }
.footer-icon:hover { color: var(--color-primary); border-color: var(--color-outline-variant); background: var(--color-surface-container-low); }
.footer-icon:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) { .footer-icon { transition: none; } }
</style>
