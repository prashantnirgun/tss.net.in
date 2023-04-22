const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "The Software Source",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
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
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Products",
        items: [
          { text: "Desktop", link: "/products/desktop/" },
          { text: "Web Portals", link: "/products/web-portals/" },
          { text: "Services", link: "/products/services/" },
          { text: "Tally Prime", link: "/products/tally/" },
        ],
      },
      {
        text: "About",
        link: "/about/",
      },
      {
        text: "Training",
        items: [{ text: "BPP Desktop", link: "/training/bpp-desktop/" }],
      },
      {
        text: "Bank",
        link: "/bank/",
      },
      {
        text: "Download",
        link: "/download/",
      },
      {
        text: "Contact Us",
        link: "/contact-us/",
      },
    ],
    sidebar: [
      {
        collapsable: false,
        title: "Products",
        children: [
          "/products/desktop",
          "/products/web-portals",
          "/products/services",
          "/products/tally",
        ],
      },
      "/career",
      "/contact-us",
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "flexsearch",
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-25143914-1", // UA-00000000-0
      },
    ],
    /*
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          let d =  new Date(timestamp).toLocaleDateString("en-IN")
          let t = new Date(timestamp).toLocaleTimeString("en-IN")
          return d + " " + t;
        }
      }
    ],
    */
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      //md.set({ breaks: true })
      md.use(require("markdown-it-imsize"));
    },
  },
};
