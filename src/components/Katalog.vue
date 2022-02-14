<template>
  <div class="katalog-container" id="katalog-uredaja">
    <div class="sortiranje">
      <div class="sortiranje-naslov">
        <h1 class="naslov">Katalog dostupnih uređaja</h1>
        <h2 class="podnaslov">
          Lista svih uređaja dostupnih za prodaju ili najam.
        </h2>
      </div>
      <div class="left">
        <p>Prikazano je 7 proizvoda od ukupno 17.</p>
      </div>
      <div class="right sortiraj">
        <p>Sortiraj proizvode po</p>
        <form class="sortiranje-proizvoda">
          <select id="sortiranje" name="sortiranje">
            <option value="naziv-az">Nazivu - A do Z</option>
            <option value="naziv-za">Nazivu - Z do A</option>
            <option value="cijena-uzlazno">
              Cijeni - od manje prema većoj
            </option>
            <option value="cijena-silazno">
              Cijeni - od veće prema manjoj
            </option>
            <option value="prodaja">Za prodaju</option>
            <option value="najam">Za najam</option>
          </select>
          <input type="submit" value="Sortiraj" />
        </form>
      </div>
    </div>
    <table class="tablica-proizvoda">
      <tr>
        <td>ID proizvoda</td>
        <td v-for="proizvod in proizvodi" :key="proizvod.id">
          {{ proizvod.id }}
        </td>
      </tr>
      <tr>
        <td>Naslov proizvoda</td>
        <td v-for="proizvod in proizvodi" :key="proizvod.id">
          {{ proizvod.naslov }}
        </td>
      </tr>
      <tr>
        <td>Fotografija</td>
        <td v-for="proizvod in proizvodi" :key="proizvod.id">
          <img :src="proizvod.naslov" />
        </td>
      </tr>
      <tr>
        <td>Cijena proizvoda</td>
        <td v-for="proizvod in proizvodi" :key="proizvod.id">
          {{ proizvod.cijena }}
        </td>
      </tr>
      <tr>
        <td>Vrsta oglasa</td>
        <td v-for="proizvod in proizvodi" :key="proizvod.id">
          {{ proizvod.vrsta }}
        </td>
      </tr>
      <tr>
        <td>Datum objave</td>
        <td v-for="proizvod in proizvodi" :key="proizvod.id">
          {{ proizvod.datum_objave }}
        </td>
      </tr>
      <tr>
        <td>Prodavač</td>
        <td v-for="proizvod in proizvodi" :key="proizvod.id">
          {{ proizvod.prodavac }}
        </td>
      </tr>
    </table>

    <hr />
    <!-- <div class="proizvodi">
      <div class="proizvod">
        <a class="proizvod-link">
          <div
            class="fotografija"
            style="
              background-image: url(https://www.yamahamusiclondon.com/sites/ymlv5.19/productimages/900x900/CS115V2.jpg);
            "
          ></div>
          <h2>Yamaha S112V</h2>
          <h3>4.599,99 kn</h3>
          <p>Vrsta oglasa: Prodaja</p>
          <p class="datum-objave">Objavljeno: 27.11.2021.</p>
          <p class="prodavac">Objavio: luka123</p></a
        >
      </div>
      <div class="proizvod">
        <a class="proizvod-link">
          <div
            class="fotografija"
            style="
              background-image: url(https://www.njuskalo.hr/image-w920x690/zvucne-kutije/yamaha-s115v-sateliti-2-komada-slika-85882098.jpg);
            "
          ></div>
          <h2>Yamaha S115V</h2>
          <h3>2.349,99 kn</h3>
          <p>Vrsta oglasa: Prodaja</p>
          <p class="datum-objave">Objavljeno: 27.11.2021.</p>
          <p class="prodavac">Objavio: luka123</p></a
        >
      </div>
      <div class="proizvod">
        <a class="proizvod-link">
          <div
            class="fotografija"
            style="
              background-image: url(https://muzikercdn.com/uploads/products/59/5911/thumb_d_gallery_base_2931ff0f.jpg);
            "
          ></div>
          <h2>Yamaha EMX512SC</h2>
          <h3>2.799,99 kn</h3>
          <p>Vrsta oglasa: Prodaja</p>
          <p class="datum-objave">Objavljeno: 27.11.2021.</p>
          <p class="prodavac">Objavio: luka123</p></a
        >
      </div>
      <div class="proizvod">
        <a class="proizvod-link">
          <div
            class="fotografija"
            style="
              background-image: url(https://europe.yamaha.com/en/files/EMX5014C_tilted_735x735_0b95bf6a1e16651825d0f8c5770177f3.jpg);
            "
          ></div>
          <h2>Yamaha EMX5014C</h2>
          <h3>5.199,99 kn</h3>
          <p>Vrsta oglasa: Prodaja</p>
          <p class="datum-objave">Objavljeno: 27.11.2021.</p>
          <p class="prodavac">Objavio: luka123</p></a
        >
      </div>
      <div class="proizvod">
        <a class="proizvod-link">
          <div
            class="fotografija"
            style="
              background-image: url(https://www.ronis.hr/slike/velike/integrirano-pojacalo-yamaha-a-s1200-srebrno-a-s1200-srebrna_3.jpg);
            "
          ></div>
          <h2>Yamaha A S1200</h2>
          <h3>1.299,99 kn</h3>
          <p>Vrsta oglasa: Prodaja</p>
          <p class="datum-objave">Objavljeno: 27.11.2021.</p>
          <p class="prodavac">Objavio: luka123</p></a
        >
      </div>
      <div class="proizvod">
        <a class="proizvod-link">
          <div
            class="fotografija"
            style="
              background-image: url(https://www.njuskalo.hr/image-w920x690/zvucne-kutije/yamaha-s115v-sateliti-2-komada-slika-85882098.jpg);
            "
          ></div>
          <h2>Yamaha S115V</h2>
          <h3>2.349,99 kn</h3>
          <p>Vrsta oglasa: Prodaja</p>
          <p class="datum-objave">Objavljeno: 27.11.2021.</p>
          <p class="prodavac">Objavio: luka123</p></a
        >
      </div>
      <div class="proizvod">
        <a class="proizvod-link">
          <div
            class="fotografija"
            style="
              background-image: url(https://muzikercdn.com/uploads/products/59/5911/thumb_d_gallery_base_2931ff0f.jpg);
            "
          ></div>
          <h2>Yamaha EMX512SC</h2>
          <h3>2.799,99 kn</h3>
          <p>Vrsta oglasa: Prodaja</p>
          <p class="datum-objave">Objavljeno: 27.11.2021.</p>
          <p class="prodavac">Objavio: luka123</p></a
        >
      </div>
    </div> -->
  </div>
</template>

<script>
import proizvodiData from "../json/database.json";

export default {
  name: "Katalog",
  props: {
    msg: String,
  },
  data() {
    return {
      proizvodi: proizvodiData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table.tablica-proizvoda {
  width: 100%;
  border: 1px solid black;
  margin-top: 125px;
  margin-bottom: 50px;
}
td {
  border: 1px solid black;
  padding: 15px;
}
div.katalog-container {
  width: 80%;
  margin: 0 auto;
  font-size: 14px;
}
div.left {
  float: left;
  width: 50%;
}
div.right {
  float: right;
  width: 50%;
}
div.sortiraj p {
  float: left;
  margin-right: 25px;
}
div.sortiraj form {
  float: left;
  display: flex;
}
div.sortiranje-naslov {
  text-align: center;
  margin-top: 50px;
}
h1 {
  font-size: 35px;
  font-weight: 500;
  margin-top: 50px;
}
h2 {
  font-size: 20px;
  margin-bottom: 50px;
}
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  float: left;
  margin-right: 25px;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  transition: 0.3s;
}
input[type="submit"]:hover {
  background-color: #45a049;
  transition: 0.3s;
}
div.proizvodi {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 1.25%;
}
div.proizvod {
  flex-basis: 19%;
  margin-top: 2%;
  padding: 16px;
  transition: 0.3s;
}
div.proizvod:hover {
  background-color: rgba(1, 1, 1, 0.08);
  transition: 0.3s;
}
.proizvod h2 {
  color: black;
  font-weight: 400;
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 0px;
}
.proizvod h3 {
  margin-top: 6px;
  margin-bottom: 0px;
  color: lightslategrey;
  font-weight: 400;
  font-size: 20px;
}
.proizvod p {
  margin-top: 6px;
  margin-bottom: 0px;
  color: lightslategrey;
  font-size: 14px;
}
.fotografija {
  padding: 15px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
hr {
  width: 61%;
  margin: 0 auto;
  border: 1px solid rgba(1, 1, 1, 0.25);
}
</style>