<template>
  <Button>
    <slot></slot>
    <span class="ms-2 icon_24 icon_container position-relative">
      <transition mode="out-in" name="blur-fade">
        <icon-loader v-if="loading" />
      </transition>
      <transition name="blur-fade">
        <slot v-if="!loading" class="icon" name="icon"></slot>
      </transition>
    </span>
  </Button>
</template>
<script>
import { defineComponent } from "vue";
import Button from "primevue/button";
import IconLoader from "../../Icons/IconLoader.vue";

export default defineComponent({
  name: "PrimaryButton",
  components: {
    Button,
    IconLoader,
  },
  props: {
    icon: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
Button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon_container {
  width: 24px;
}
</style>
