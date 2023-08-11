<template>
  <nav>
    <router-link v-for="link in Links" :to="link.path">
      <component :is="link.icon" />
      <div>{{ link.title }}</div>
    </router-link>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
import IconDashboard from "../Icons/IconDashboard.vue";

export default {
  name: "DefaultSidebar",
  components: {
    IconDashboard,
    RouterLink,
  },
  data() {
    return {
      Links: [],
    };
  },
  mounted() {
    this.loadLinks();
  },
  methods: {
    loadLinks() {
      this.Links = [
        {
          title: "Home",
          path: "/",
          icon: IconDashboard,
        },
      ];
    },
  },
};
</script>

<style scoped>
@import "./_DefaultSidebar.css";
</style>
