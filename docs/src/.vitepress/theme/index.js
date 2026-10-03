import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

import PatchTable from "./components/PatchTable.vue";
import PageHero from "./components/PageHero.vue";
import StatStrip from "./components/StatStrip.vue";
import SolutionGrid from "./components/SolutionGrid.vue";
import CapabilityBand from "./components/CapabilityBand.vue";
import CtaBand from "./components/CtaBand.vue";

import "./custom.css";

// https://vitepress.dev/guide/custom-theme
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("PatchTable", PatchTable);
    app.component("PageHero", PageHero);
    app.component("StatStrip", StatStrip);
    app.component("SolutionGrid", SolutionGrid);
    app.component("CapabilityBand", CapabilityBand);
    app.component("CtaBand", CtaBand);
  },
};
