<template>
  <div class="welcome container">
    welcome
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        No account yet? <span @click="showLogin = false">Sign up</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>

      <SignupForm @login="enterChat" />
      <p>
        No account yet? <span @click="showLogin = true">Log ip</span> instead
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Welcome",
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChat };
  },
});
</script>
<style>
.welcome {
  text-align: center;
  padding: 1.5rem 0;
}
.welcome form {
  width: 18.75rem;
  /* the "auto" option centralises it */
  margin: 1.5rem auto;
}
.welcome label {
  display: block;
  margin: 1.5rem 0 0.625rem;
}
.welcome input {
  width: 100%;
  padding: 0.625rem;
  border-radius: 1.5rem;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 0.625rem auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 1.5rem auto;
}
</style>
