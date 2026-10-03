<script setup>
// Every figure here is sourced from copy already published on this site.
// Nothing is estimated or invented.
const stats = [
  { figure: "300+", label: "Customers across Maharashtra" },
  { figure: "6", label: "Product lines in production" },
  { figure: "APMC", label: "Market specialists, Turbhe" },
  { figure: "Open", label: "Source stack, no licence lock-in" },
];
</script>

<template>
  <section class="StatStrip">
    <dl class="StatStrip-inner">
      <div v-for="stat in stats" :key="stat.label" class="StatStrip-item">
        <dt class="StatStrip-figure">{{ stat.figure }}</dt>
        <dd class="StatStrip-label">{{ stat.label }}</dd>
      </div>
    </dl>
  </section>
</template>
