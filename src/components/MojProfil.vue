<template>
    <div class="mojprofil-container" id="moj-profil">
        <hr>
        
        <!-- izmjena --><h2 class="podnaslov">* ovaj dio će biti vidljiv kada korisnik pritisne Moj profil u navigacijskoj traci (vidljivo samo kad je korisnik prijavljen)</h2>
        <div class="sredina">
            <h1 class="naslov">Vaš profil, luka123</h1>
            <h2 class="podnaslov">Pregledajte Vaše oglase, uredite objavljene oglase, promijenite osobne informacije.</h2>
        </div>
        <div class="oglasi">
            <h1 class="naslov">Vaši oglasi</h1>
            <!-- <p>Trenutno nemate aktivan niti jedan oglas.</p> -->
            <p>Imate 3 aktivna oglasa.</p>
            <div class="proizvodi">
                <div class='proizvod'><a class="proizvod-link">
                    <div class='fotografija' style='background-image: url(https://www.yamahamusiclondon.com/sites/ymlv5.19/productimages/900x900/CS115V2.jpg)'></div>
                    <h2>Yamaha S112V</h2>
                    <h3>4.599,99 kn</h3>
                    <p>Vrsta oglasa: Prodaja</p>
                    <p class="datum-objave">Objavljeno: 27.11.2021.</p></a>
                    <div class="gumb-uredi"><button class="uredi">Uredi oglas</button></div>
                    <div class="gumb-obrisi"><button class="obrisi">Obriši oglas</button></div>
                </div>
                <div class='proizvod'><a class="proizvod-link">
                    <div class='fotografija' style='background-image: url(https://www.njuskalo.hr/image-w920x690/zvucne-kutije/yamaha-s115v-sateliti-2-komada-slika-85882098.jpg)'></div>
                    <h2>Yamaha S115V</h2>
                    <h3>2.349,99 kn</h3>
                    <p>Vrsta oglasa: Prodaja</p>
                    <p class="datum-objave">Objavljeno: 27.11.2021.</p></a>
                    <div class="gumb-uredi"><button class="uredi">Uredi oglas</button></div>
                    <div class="gumb-obrisi"><button class="obrisi">Obriši oglas</button></div>
                </div>
                <div class='proizvod'><a class="proizvod-link">
                    <div class='fotografija' style='background-image: url(https://muzikercdn.com/uploads/products/59/5911/thumb_d_gallery_base_2931ff0f.jpg)'></div>
                    <h2>Yamaha EMX512SC</h2>
                    <h3>2.799,99 kn</h3>
                    <p>Vrsta oglasa: Prodaja</p>
                    <p class="datum-objave">Objavljeno: 27.11.2021.</p></a>
                    <div class="gumb-uredi"><button class="uredi">Uredi oglas</button></div>
                    <div class="gumb-obrisi"><button class="obrisi">Obriši oglas</button></div>
                </div>
            </div>
        </div>
        <div class="informacije">
            <h1 class="naslov">Vaši osobni podatci</h1>
            <table>
                <tr>
                    <td>Ime i prezime</td>
                    <td>Luka Vavra</td>
                </tr>
                <tr>
                    <td>Email adresa</td>
                    <td>lvavra@tvz.hr</td>
                </tr>
                <tr>
                    <td>Korisničko ime</td>
                    <td>luka123</td>
                </tr>
                <tr>
                    <td>Lokacija</td>
                    <td>Daruvar</td>
                </tr>
                <tr>
                    <td>Kontakt broj</td>
                    <td>098 xxxx xxx</td>
                </tr>
            </table>
            <div class="gumb-uredi-racun"><button class="uredi">Uredi podatke</button></div>
            <div class="gumb-obrisi-racun"><button class="obrisi">Obriši račun</button></div>
        </div>
        <!-- izmjena --><h2 class="podnaslov">* Iz razloga što nisam uspio da mi proradi Javascript, dosta detalja nisam uspio ostvariti, poput Back to the top gumba, također većina gornjih elemenata (registracija, prijava, pregled proizvoda, promjena informacija o proizvodu, promjena osobnih podataka) želim da bude prikazana kao Modal Box, pa bih to pretvorio u Modal kad uspostavim Javascript.</h2>
    </div>
</template>

<script>
    export default {
        name: 'MojProfil',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table{
        width: 50%;
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 20px;
    }
    td{
        padding-bottom: 4px;
        font-weight: 300;
        color: lightslategrey;
    }
    .sredina{
        width: 100%;
        text-align: center;
    }
    div.gumb-uredi{
        margin: 0 auto;
        width: 100%;
        padding-top: 15px;
    }
    div.gumb-obrisi{
        margin: 0 auto;
        width: 100%;
        padding-top: 15px;
    }
    div.gumb-uredi-racun{
        width: 25%;
        padding-top: 15px;
    }
    div.gumb-obrisi-racun{
        width: 25%;
        padding-top: 15px;
    }
    button.uredi{
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: 0.3s;
    }
    button.uredi:hover {
        background-color: #45a049;
        transition: 0.3s;
    }
    button.obrisi{
        width: 100%;
        background-color: #AF504C;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: 0.3s;
    }
    button.obrisi:hover {
        background-color: #923f3c;
        transition: 0.3s;
    }
    div.informacije{
        text-align: left;
        margin-bottom: 50px;
    }
    div.mojprofil-container{
        width: 70%;
        margin: 0 auto;
        font-size: 18px;
        text-align: left;
    }
    h1{
        font-size: 35px;
        font-weight: 500;
        margin-top: 50px;
    }
    h2{
        font-size: 20px;
        margin-bottom: 50px;
    }
    hr{
        width: 70%;
        margin: 0 auto;
        border: 1px solid rgba(1, 1, 1, 0.25);
    }
    div.proizvodi{
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: left;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        gap: 2%;
    }
    div.proizvod{
        flex-basis: 20%;
        margin-top: 2%;
        padding: 16px;
        transition: 0.3s;
    }
    div.proizvod:hover{
        background-color: rgba(1, 1, 1, 0.08);
        transition: 0.3s;
    }
    .proizvod h2{
        color: black;
        font-weight: 400;
        font-size: 24px;
        margin-top: 15px;
        margin-bottom: 0px;
    }
    .proizvod h3{
        margin-top: 6px;
        margin-bottom: 0px;
        color: lightslategrey;
        font-weight: 400;
        font-size: 20px;
    }
    .proizvod p{
        margin-top: 6px;
        margin-bottom: 0px;
        color: lightslategrey;
        font-size: 14px;
    }
    .fotografija{
        padding: 15px;
        height: 250px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>