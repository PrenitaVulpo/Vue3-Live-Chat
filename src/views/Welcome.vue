<template>
  <div class="welcome container">welcome</div>
  <SignupForm />
  <LoginForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";

export default defineComponent({
  name: "Welcome",
  components: { SignupForm, LoginForm },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.welcome {
  text-align: center;
  padding: 1.5rem 0;
}
</style>
