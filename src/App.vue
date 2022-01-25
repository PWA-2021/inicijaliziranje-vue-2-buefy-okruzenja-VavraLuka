<template>
  <div id="app">
    <app-navigacija>
      <Navigacija />
    </app-navigacija>
    <router-view />
  </div>
</template>

<script>
import Navigacija from "./components/Navigacija.vue";

export default {
  name: "App",
  components: {
    "app-navigacija": Navigacija
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