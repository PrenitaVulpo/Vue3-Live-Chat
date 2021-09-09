<template>
  <nav>
    <div>
      <p>hey there</p>
      <p class="email">{{ currentUser.email }}</p>
    </div>
    <button @click="handleLogout">logout</button>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";

export default defineComponent({
  setup() {
    const { logout, errorMessage } = useLogout();
    const { currentUser, authStateStatus } = getUser();

    authStateStatus();
    console.log(currentUser.value);

    const handleLogout = async () => {
      await logout();
      console.log("dasdsa");
      if (!errorMessage.value) {
        console.log("user logged out");
      }
    };

    return { handleLogout, currentUser };
  },
});
</script>
<style>
nav {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 0.125rem auto;
  font-size: 1rem;
  color: #444;
}
nav p.email {
  font-size: 0.875rem;
  color: #999;
}
</style>
