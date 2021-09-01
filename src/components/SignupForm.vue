<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      name="Display Name"
      placeholder="display name"
      required
      v-model="displayName"
    />
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
    <button>Sign up</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayName, email, password);
    };

    return { displayName, email, password, handleSubmit };
  },
});
</script>
