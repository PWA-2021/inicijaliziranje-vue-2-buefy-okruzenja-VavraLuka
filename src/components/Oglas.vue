<template>
    <div class="oglas-container" id="oglas">
        <hr>
        <h1 class="naslov">Yamaha EMX512SC</h1>
        <h2 class="podnaslov">Pojačalo</h2>
        <div class="informacije">
                <img src="https://muzikercdn.com/uploads/products/59/5911/thumb_d_gallery_base_2931ff0f.jpg" class="fotografija">
                <div class="tekst">
                    <h2 class="info">Informacije o proizvodu</h2>
                    <table>
                        <tr>
                            <td>Cijena</td>
                            <td>2.799,99kn</td>
                        </tr>
                        <tr>
                            <td>Vrsta oglasa</td>
                            <td>Prodaja</td>
                        </tr>
                        <tr>
                            <td>Datum objave</td>
                            <td>27.11.2021.</td>
                        </tr>
                    </table>
                    <h2 class="info">Opis proizvoda</h2>
                    <p class="opis">Experienced musicians, performers, speakers, and club operators know the importance of a high-quality sound system with the right features and performance to deliver their sound. Where portability and convenience are important criteria, a system based on a high-performance Yamaha EMX-series powered mixer is definitely the way to go. In one integrated, portable unit you have a mixer to combine and balance your microphone and instrument and line sources, effects to refine and polish your sound, and power to drive the main speakers and even monitor speakers as well.</p>
                    <h2 class="info">Informacije o prodavaču</h2>
                    <table>
                       <tr>
                            <td>Objavio</td>
                            <td>Luka Vavra</td>
                        </tr>
                        <tr>
                            <td>Kontakt broj</td>
                            <td>098 xxxx xxx</td>
                        </tr>
                        <tr>
                            <td>Email adresa</td>
                            <td>lvavra@tvz.hr</td>
                        </tr>
                        <tr>
                            <td>Lokacija</td>
                            <td>Daruvar</td>
                        </tr>
                    </table>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Oglas',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    table{
        width: 100%;
        font-size: 16px;
        font-weight: 300;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    p.opis{
        font-size: 16px;
        color: lightslategrey;
        font-weight: 300;
        margin-bottom: 20px;
    }
    td{
        padding-bottom: 4px;
        font-weight: 300;
        color: lightslategrey;
    }
    h2.info{
        font-size: 26px;
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
    .tekst{
        float: left;
        width: 60%;
        padding: 50px;
    }
    .fotografija{
        float: left;
        width: 40%;
        padding: 0px;
        margin-bottom: 75px;
    }
    div.informacije{
        text-align: left;
        margin-bottom: 50%;
    }
    div.oglas-container{
        width: 70%;
        margin: 0 auto;
        font-size: 18px;
        text-align: center;
        margin-bottom: 700px;
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
</style>