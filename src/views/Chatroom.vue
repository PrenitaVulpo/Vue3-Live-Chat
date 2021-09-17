<template>
  <div class="container">
    <Navbar />
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { Navbar },
  setup() {
    const { currentUser } = getUser();
    const router = useRouter();

    watch(currentUser, () => {
      if (!currentUser.value) {
        router.push({ name: "Welcome" });
      }
    });

    return { currentUser };
  },
});
</script>
