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
    <div class="error">{{ errorMessage }}</div>
    <button>Sign up</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import useSignup from "@/composables/useSignup";

export default defineComponent({
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const { signup, errorMessage } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
    };

    return { displayName, email, password, handleSubmit, errorMessage };
  },
});
</script>
