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
    <div class="error">{{ errorMessage }}</div>
    <button>Log in</button>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import useLogin from "@/composables/useLogin";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");

    const { errorMessage, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!errorMessage.value) {
        console.log("user loggedIn");
      }
    };

    return { email, password, handleSubmit, errorMessage };
  },
});
</script>
