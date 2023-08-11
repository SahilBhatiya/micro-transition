<template>
  <Dropdown
    v-model="selectedCity"
    :options="cities"
    class="w-full md:w-14rem"
    optionLabel="name"
    placeholder="Select a City"
  />
  <primary-button :loading="loading" icon="pi-check" @click="showLoading">
    Send
    <template #icon>
      <icon-check-circle />
    </template>
  </primary-button>
</template>

<script>
import { defineComponent } from "vue";
import PrimaryButton from "../../core/Buttons/PrimaryButton/PrimaryButton.vue";
import IconCheckCircle from "../../core/Icons/IconCheckCircle.vue";

export default defineComponent({
  name: "index",
  components: { IconCheckCircle, PrimaryButton },
  data() {
    return {
      selectedCity: null,
      loading: false,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
    };
  },
  methods: {
    showLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
});
</script>

<style scoped></style>
