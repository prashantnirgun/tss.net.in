<template>
  <ClientOnly>
    <DarkMode>
      <template v-slot="{ mode }">
        Color mode: <span>{{ mode }}</span>
      </template>
    </DarkMode>
  </ClientOnly>
</template>

<script>
import { DarkMode } from '@vue-a11y/dark-mode'

export default {
  components: {
    DarkMode
  }
}
</script>