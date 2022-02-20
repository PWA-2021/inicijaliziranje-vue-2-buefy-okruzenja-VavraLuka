<template>
  <div class="container">
    <app-moj-profil>
      <MojProfil />
    </app-moj-profil>
    <app-dodaj-uredaj>
      <DodajUredaj />
    </app-dodaj-uredaj>
  </div>
</template>

<script>
import MojProfil from "../components/MojProfil.vue";
import DodajUredaj from "../components/DodajUredaj.vue";

export default {
  name: "Profil",
  components: {
    "app-moj-profil": MojProfil,
    "app-dodaj-uredaj": DodajUredaj,
  },
};
</script>

<style scoped>
</style>