<template>
  <div class="container">
    <app-prijava>
      <Prijava />
    </app-prijava>
  </div>
</template>

<script>
import Prijava from "../components/Prijava.vue";

export default {
  name: "Login",
  components: {
    "app-prijava": Prijava,
  },
};
</script>

<style scoped>
</style>