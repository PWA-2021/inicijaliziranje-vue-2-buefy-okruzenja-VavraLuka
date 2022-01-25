<template>
  <div>
    <app-header>
      <Header />
    </app-header>
    <app-katalog>
      <Katalog />
    </app-katalog>
    <app-oglas>
      <Oglas />
    </app-oglas>
    <app-moj-profil>
      <MojProfil />
    </app-moj-profil>
    <app-dodaj-uredaj>
      <DodajUredaj />
    </app-dodaj-uredaj>
    <app-footer>
      <Footer />
    </app-footer>
  </div>
</template>

<script>
import Header from "./../components/Header.vue";
import Katalog from "./../components/Katalog.vue";
import Footer from "./../components/Footer.vue";
import DodajUredaj from "./../components/DodajUredaj.vue";
import MojProfil from "./../components/MojProfil.vue";
import Oglas from "./../components/Oglas.vue";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-katalog": Katalog,
    "app-footer": Footer,
    "app-dodaj-uredaj": DodajUredaj,
    "app-moj-profil": MojProfil,
    "app-oglas": Oglas,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: "Montserrat";
}
::-webkit-scrollbar {
  display: none;
}
html {
  scroll-behavior: smooth;
}
</style>