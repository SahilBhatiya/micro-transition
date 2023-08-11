<template>
  <div class="app-container">
    <default-sidebar />
    <router-view v-slot="{ Component, route }">
      <transition
        enter-active-class="page-fade-in"
        leave-active-class="page-fade-out"
        mode="out-in"
      >
        <div class="container-fluid py-3">
          <component :is="Component" id="innerApp" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script>
import DefaultSidebar from "./core/Sidebar/_DefaultSidebar.vue";

export default {
  name: "App",
  components: {
    DefaultSidebar,
  },
};
</script>

<style scoped></style>
