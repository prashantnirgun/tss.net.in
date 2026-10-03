<script setup>
// Condensed from the technology stack already listed on /about/.
const groups = [
  {
    title: "Languages",
    items: ["C", "Java", "Python", "Node", "PHP", "JavaScript", "PowerBuilder", "Foxpro"],
  },
  {
    title: "Frameworks",
    items: ["Vue 2 / 3", "Nuxt.js", "Quasar", "Express", "Electron", "NativeScript", "CodeIgniter"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "MS-SQL", "Sybase", "SQLite"],
  },
  {
    title: "Mobile & payments",
    items: ["Flutter", "Android", "Quasar", "Razorpay", "Instamojo"],
  },
];
</script>

<template>
  <section class="Section Section--tint">
    <div class="Section-inner">
      <header class="Section-head">
        <p class="Section-eyebrow">Capabilities</p>
        <h2 class="Section-title">A stack chosen for longevity</h2>
        <p class="Section-lede">
          Full-stack, JamStack, WAMP, LAMP and MEVN delivery — on open source
          foundations, so there is no licence lock-in on what we hand over.
        </p>
      </header>

      <div class="CapabilityGrid">
        <div v-for="group in groups" :key="group.title" class="Capability">
          <h3 class="Capability-title">{{ group.title }}</h3>
          <ul class="Capability-tags">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <p class="Section-foot">
        <a href="/about/">See the full technology stack →</a>
      </p>
    </div>
  </section>
</template>
