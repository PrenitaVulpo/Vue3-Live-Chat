<template>
  <div class="welcome container">welcome</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Welcome",
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
