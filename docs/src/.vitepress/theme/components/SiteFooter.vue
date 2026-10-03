<script setup>
// Phone and email are rendered as images, matching how contact-us.md already
// publishes them - it keeps them out of reach of address scrapers.
const products = [
  { text: "APMC Accounting", link: "/products/desktop/business-plus-plus.html" },
  { text: "Retail GST Software", link: "/products/desktop.html" },
  { text: "Credit Society Banking", link: "/products/credit-society.html" },
  { text: "E-Commerce", link: "/products/e-commerce.html" },
  { text: "Election Portal", link: "/products/election.html" },
  { text: "Tally Prime", link: "/products/tally.html" },
];

const company = [
  { text: "About Us", link: "/about/" },
  { text: "Services", link: "/products/services.html" },
  { text: "Career", link: "/career.html" },
  { text: "Download", link: "/download.html" },
  { text: "Bank Details", link: "/bank.html" },
  { text: "Contact Us", link: "/contact-us.html" },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="SiteFooter">
    <div class="SiteFooter-inner">
      <div class="SiteFooter-brand">
        <a class="SiteFooter-logo" href="/">
          <img src="/images/logo.jpg" alt="" width="40" height="40" />
          <span>The Software Source</span>
        </a>
        <p class="SiteFooter-blurb">
          Open source business solutions, customised for the client. We build
          and deploy accounting, banking and finance software for institutions
          that process a high volume of transactions.
        </p>
      </div>

      <nav class="SiteFooter-col" aria-labelledby="footer-products">
        <h2 id="footer-products">Products</h2>
        <ul>
          <li v-for="item in products" :key="item.link">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </nav>

      <nav class="SiteFooter-col" aria-labelledby="footer-company">
        <h2 id="footer-company">Company</h2>
        <ul>
          <li v-for="item in company" :key="item.link">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </nav>

      <div class="SiteFooter-col SiteFooter-contact">
        <h2>Get in touch</h2>
        <address>
          Central Facility Building<br />
          Office No 11, Ground Floor<br />
          APMC Fruit Market<br />
          Turbhe, Navi Mumbai 400 705
        </address>
        <div class="SiteFooter-contactImages">
          <img src="/images/phone.png" alt="Telephone number" />
          <img src="/images/email.png" alt="Email address" />
        </div>
      </div>
    </div>

    <div class="SiteFooter-bar">
      <p>© {{ year }} The Software Source. All rights reserved.</p>
      <p class="SiteFooter-loc">Navi Mumbai, Maharashtra, India</p>
    </div>
  </footer>
</template>
