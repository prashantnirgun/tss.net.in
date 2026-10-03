import DefaultTheme from "vitepress/theme";
import PatchTable from "./components/PatchTable.vue";
import "./custom.css";

// https://vitepress.dev/guide/custom-theme
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("PatchTable", PatchTable);
  },
};
