<template>
  <div class="theme-container">
    <Navbar />

    <div class="sidebar-mask"></div>
    <Sidebar />

    <Home v-if="$page.frontmatter.home" />

    <Page v-else :sidebar-items="sidebarItems">
      <template #bottom>
        <!-- Existing page content -->

        <footer class="footer">
          <hr />
          <p align="center">
            © Copyright 2026 Business Plus Plus. All Rights Reserved.
          </p>
        </footer>
      </template>
    </Page>
  </div>
</template>
