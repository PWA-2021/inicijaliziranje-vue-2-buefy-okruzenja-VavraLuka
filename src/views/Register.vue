<template>
  <div class="container">
    <app-registracija>
      <Registracija />
    </app-registracija>
  </div>
</template>

<script>
import Registracija from "../components/Registracija.vue";

export default {
  name: "Register",
  components: {
    "app-registracija": Registracija,
  },
};
</script>

<style scoped>
</style>