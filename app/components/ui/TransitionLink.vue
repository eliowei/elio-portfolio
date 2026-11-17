<template>
  <a v-bind="$attrs" :href="to" @click="handleClick"><slot /></a>
</template>
<script setup>
defineOptions({ inheritAttrs: false })
const props = defineProps({ to: { type: String, required: true }, transitionTitle: String })
const emit = defineEmits(['click'])
const { navigate } = usePageNavigation()
const attrs = useAttrs()
async function handleClick(event) {
  if (event.defaultPrevented) return
  emit('click', event)
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || attrs.target === '_blank' || attrs.download !== undefined) return
  event.preventDefault()
  await navigate(props.to, props.transitionTitle)
}
</script>
