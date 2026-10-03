<script setup>
// Descriptions are taken verbatim in substance from the feature list that was
// already on the home page; links point at the existing detail pages.
const solutions = [
  {
    title: "APMC Accounting Software",
    body: "Multi-lingual desktop accounting for APMC vendors. Out-of-state item taxation, inventory, general accounting, SMS, online backup, network ready.",
    link: "/products/desktop/business-plus-plus.html",
    tag: "Desktop",
  },
  {
    title: "Credit Co-Op Society Banking",
    body: "Online banking portal for staff co-operative credit societies. Multiple loan and deposit schemes, passbook, auto SMS reply for loan queries, general accounting.",
    link: "/products/credit-society.html",
    tag: "Web portal",
  },
  {
    title: "E-Commerce",
    body: "Online sales, accounting and inventory with GST, multiple rate lists, fixed tender rates, flash sales, payment gateway, multiple delivery addresses and order tracking.",
    link: "/products/e-commerce.html",
    tag: "Web portal",
  },
  {
    title: "GST Retail Software",
    body: "Desktop accounting for SMEs. Easy billing, taxation, inventory, general accounting, SMS, online backup, network ready.",
    link: "/products/desktop.html",
    tag: "Desktop",
  },
  {
    title: "Election Portal",
    body: "Tracks and categorises voter lists, handles election campaigns and SMS, prints voter lists, cards and other reports.",
    link: "/products/election.html",
    tag: "Web portal",
  },
  {
    title: "E-Governance (SETU)",
    body: "Desktop application for the Maharashtra SETU project: caste, non-creamy-layer, income and senior citizen certificates, property cards and central and state schemes.",
    link: "/products/desktop.html",
    tag: "Desktop",
  },
];
</script>

<template>
  <section class="Section">
    <div class="Section-inner">
      <header class="Section-head">
        <p class="Section-eyebrow">What we build</p>
        <h2 class="Section-title">Software for businesses that move money</h2>
        <p class="Section-lede">
          Six product lines in production across agricultural markets,
          co-operative banking, retail and government services.
        </p>
      </header>

      <ul class="CardGrid">
        <li v-for="item in solutions" :key="item.title" class="Card">
          <a class="Card-link" :href="item.link">
            <span class="Card-tag">{{ item.tag }}</span>
            <h3 class="Card-title">{{ item.title }}</h3>
            <p class="Card-body">{{ item.body }}</p>
            <span class="Card-cta" aria-hidden="true">Learn more →</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
