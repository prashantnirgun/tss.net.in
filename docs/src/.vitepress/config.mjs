import { defineConfig } from "vitepress";
import imsize from "markdown-it-imsize";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Software Source",
  description:
    "Navi Mumbai based Software company provides Open Source Solutions for all your business needs.",

  srcExclude: ["**/README.md"],

  // The installers and patches under /download/ are uploaded to the web server
  // directly, not committed here, so VitePress cannot verify them. Everything
  // else is still link-checked.
  ignoreDeadLinks: [/^\/download(-old)?\//],

  // Replaces the hand-maintained public/sitemap.xml, which had drifted to
  // 10 of 38 pages and still used http://.
  sitemap: {
    hostname: "https://tss.net.in/",
  },

  // Keep the existing /page.html URLs so inbound links and search
  // rankings carry over from the VuePress build. Do not enable cleanUrls.
  cleanUrls: false,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "Aem3HUgalfltVdYlJhL1qE8OgA7F7g8Sni7DfSBoSWQ",
      },
    ],
    ["link", { rel: "icon", href: "/images/logo.jpg" }],
  ],

  // Analytics is deliberately not wired up here yet.
  //
  // The old config sent to UA-25143914-1, a Universal Analytics property;
  // UA stopped accepting data in July 2023, so that tag was a no-op.
  // The live site fires GA4 G-XPZSRKENJT from somewhere outside this repo
  // (host-level injection or a hand-edit on the server). Confirm where that
  // comes from before enabling the block below, or hits will be counted twice.
  //
  // head: [
  //   ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" }],
  //   ["script", {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`],
  // ],

  markdown: {
    lineNumbers: true,
    config: (md) => {
      // Preserves the `![alt](/img.png =100x100)` sizing syntax used in the content
      md.use(imsize);
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.jpg",

    search: {
      provider: "local",
    },

    // Four top-level items, not six. The desktop menu appears at 768px, and
    // six items measured 482px there - wide enough to push the page into a
    // horizontal scroll on an iPad in portrait. Grouping fixes that without
    // overriding the theme's nav breakpoints (the mobile nav screen is gated
    // at the same 768px, so unhiding the hamburger above it breaks the menu).
    nav: [
      {
        text: "Products",
        items: [
          // was /products/desktop/ in the VuePress config, which 404'd
          { text: "Desktop Applications", link: "/products/desktop" },
          { text: "Web Portals", link: "/products/web-portals" },
          { text: "Services", link: "/products/services" },
          { text: "Tally Prime", link: "/products/tally" },
        ],
      },
      {
        text: "Support",
        items: [
          { text: "Downloads", link: "/download" },
          { text: "Training", link: "/training/bpp-desktop" },
          { text: "Bank Details", link: "/bank" },
        ],
      },
      {
        text: "Company",
        items: [
          // was /about.html, which 404'd: the page builds to /about/
          { text: "About Us", link: "/about/" },
          { text: "Career", link: "/career" },
        ],
      },
      { text: "Contact", link: "/contact-us" },
    ],

    sidebar: [
      {
        text: "Products",
        collapsed: false,
        items: [
          { text: "Desktop Applications", link: "/products/desktop" },
          { text: "Web Portals", link: "/products/web-portals" },
          { text: "Services", link: "/products/services" },
          { text: "Tally Prime", link: "/products/tally" },
        ],
      },
      { text: "Career", link: "/career" },
      { text: "Contact Us", link: "/contact-us" },
    ],

    footer: {
      copyright: "© Copyright 2026 Business Plus Plus. All Rights Reserved.",
    },

    outline: "deep",
  },
});
