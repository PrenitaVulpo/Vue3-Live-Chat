<template>
  <nav>
    <div>
      <p>hey there</p>
      <p class="email">email</p>
    </div>
    <button>logout</button>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
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
