<script setup>
defineProps({
  eyebrow: { type: String, default: "" },
  title: { type: String, required: true },
  lede: { type: String, default: "" },
  actions: { type: Array, default: () => [] },
});
</script>

<template>
  <section class="PageHero">
    <div class="PageHero-inner">
      <p v-if="eyebrow" class="PageHero-eyebrow">{{ eyebrow }}</p>
      <h1 class="PageHero-title">{{ title }}</h1>
      <p v-if="lede" class="PageHero-lede">{{ lede }}</p>
      <div v-if="actions.length" class="PageHero-actions">
        <a
          v-for="action in actions"
          :key="action.link"
          :href="action.link"
          :class="['PageHero-btn', `is-${action.theme || 'brand'}`]"
        >
          {{ action.text }}
        </a>
      </div>
    </div>
  </section>
</template>
