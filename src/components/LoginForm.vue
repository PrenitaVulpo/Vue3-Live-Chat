<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="email"
      name="email"
      placeholder="email"
      required
      v-model="email"
    />
    <input
      type="password"
      name="password"
      placeholder="password"
      required
      v-model="password"
    />
    <button>Log in</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email, password);
    };

    return { email, password, handleSubmit };
  },
});
</script>
