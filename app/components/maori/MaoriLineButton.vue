<template>
  <button type="button" class="mr-line" @click="notify('示意帳號 尚未開放加入')">
    <MaoriIcon name="line" />加入 LINE 官方帳號預約
  </button>
</template>

<script setup lang="ts">
const { notify } = useMaoriNotice()
</script>

<style scoped>
/* Darker than the LINE brand green so the white label stays readable. */
.mr-line { display: inline-flex; align-items: center; justify-content: center; gap: .6rem; min-height: 52px; padding: .4rem 1.5rem; border-radius: 12px; background: #067a37; color: #fff; font-weight: 700; cursor: pointer; transition: translate var(--mr-fast); }
.mr-line:hover { translate: 0 -2px; }
.mr-line svg { flex: none; width: 30px; height: 30px; }
</style>
