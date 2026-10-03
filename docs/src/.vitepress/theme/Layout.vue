<script setup>
import DefaultTheme from "vitepress/theme";
import SiteFooter from "./components/SiteFooter.vue";

const { Layout: DefaultLayout } = DefaultTheme;
</script>

<template>
  <!--
    The default theme's own footer (themeConfig.footer) is hidden on any page
    with a sidebar, and is a single centred line. This renders a full
    multi-column footer below every page instead, via the layout-bottom slot.
  -->
  <DefaultLayout>
    <template #layout-bottom>
      <SiteFooter />
    </template>
  </DefaultLayout>
</template>
