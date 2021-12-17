<template>
  <div>
    <app-navigacija>
      <Navigacija/>
    </app-navigacija>
    <app-header>
      <Header/>
    </app-header>
    <app-registracija>
      <Registracija/>
    </app-registracija>
    <app-prijava>
      <Prijava/>
    </app-prijava>
    <app-katalog>
      <Katalog/>
    </app-katalog>
    <app-oglas>
      <Oglas/>
    </app-oglas>
    <app-moj-profil>
      <MojProfil/>
    </app-moj-profil>
    <app-dodaj-uredaj>
      <DodajUredaj/>
    </app-dodaj-uredaj>
    <app-footer>
      <Footer/>
    </app-footer>
  </div>
</template>

<script>
import Navigacija from './../components/Navigacija.vue'
import Header from './../components/Header.vue'
import Katalog from './../components/Katalog.vue'
import Footer from './../components/Footer.vue'
import DodajUredaj from './../components/DodajUredaj.vue'
import MojProfil from './../components/MojProfil.vue'
import Registracija from './../components/Registracija.vue'
import Prijava from './../components/Prijava.vue'
import Oglas from './../components/Oglas.vue'
export default {
  name: 'App',
  components: {
    'app-navigacija': Navigacija,
    'app-header': Header,
    'app-katalog': Katalog,
    'app-footer': Footer,
    'app-dodaj-uredaj': DodajUredaj,
    'app-moj-profil': MojProfil,
    'app-registracija': Registracija,
    'app-prijava': Prijava,
    'app-oglas': Oglas
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat';
}
::-webkit-scrollbar {
    display: none;
}
html{
  scroll-behavior: smooth;
}
</style>