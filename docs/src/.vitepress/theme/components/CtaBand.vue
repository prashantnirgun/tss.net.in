<script setup>
defineProps({
  title: { type: String, default: "Let's talk about your requirement" },
  lede: {
    type: String,
    default:
      "We are in the APMC Fruit Market at Turbhe, Navi Mumbai. Walk in, call, or send us a mail and we will get back to you.",
  },
});
</script>

<template>
  <section class="CtaBand">
    <div class="CtaBand-inner">
      <div class="CtaBand-copy">
        <h2>{{ title }}</h2>
        <p>{{ lede }}</p>
      </div>
      <div class="CtaBand-actions">
        <a class="PageHero-btn is-invert" href="/contact-us.html">Contact us</a>
        <a class="PageHero-btn is-ghost" href="/products/desktop.html">
          Browse products
        </a>
      </div>
    </div>
  </section>
</template>
