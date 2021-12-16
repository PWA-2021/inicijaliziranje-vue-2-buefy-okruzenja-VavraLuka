<template>
    <div class="container" id="dodavanje-uredaja">
        <hr>
        <div class="dodaj-uredaj-container">
            <h1 class="naslov">Dodavanje uređaja</h1>
            <h2 class="podnaslov">Dodajte svoj uređaj za najam ili prodaju.</h2>
            <div class="forma-dodaj-uredaj">
                <form class="dodaj-uredaj">
                    <h3>Dodavanje uređaja omogućeno je samo prijavljenim korisnicima.</h3>
                    <label for="prodaja-najam">Proizvod je:</label><br>
                    <select id="prodaja-najam" name="prodaja-najam">
                        <option value="Prodaja">na prodaju</option>
                        <option value="Najam">za najam</option>
                    </select><br><br>
                    <label for="vrsta-proizvoda">Vrsta proizvoda</label><br>
                    <select id="vrsta-proizvoda" name="vrsta-proizvoda">
                        <option value="Zvucnik">Zvučnik</option>
                        <option value="Pojacalo">Pojačalo</option>
                        <option value="Kablovi">Kablovi</option>
                        <option value="Osvjetljenje">Osvjetljenje</option>
                    </select><br><br>
                    <label for="vrijeme-najma">Vrijeme najma (u danima):</label><br>
                    <input type="number" name="vrijeme-namja" id="vrijeme-najma" placeholder="Vrijeme najma">
                    <label for="url">URL fotografije uređaja:</label><br>
                    <input type="url" name="url-fotografije" id="url" placeholder="URL"><br><br>
                    <label for="naslov-oglasa">Naslov oglasa</label><br>
                    <input type="text" name="naslov-oglasa" id="naslov-oglasa" placeholder="Naslov oglasa"><br><br>
                    <label for="opis-oglasa">Opis oglasa</label><br>
                    <input type="text" name="opis-oglasa" id="opis-oglasa" placeholder="Opis oglasa"><br><br>
                    <label for="cijena">Cijena uređaja (u kn):</label><br>
                    <input type="number" name="cijena" id="cijena" placeholder="Cijena uređaja"><br><br>
                    <div class="form-buttons">
                        <input type="submit" name="submit" value="Dodaj uređaj">
                        <input type="reset" value="Obriši podatke">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.container{
        width: 100%;
    }
    hr{
        width: 70%;
        margin: 0 auto;
        border: 1px solid rgba(1, 1, 1, 0.25);
    }
    div.dodaj-uredaj-container{
        width: 70%;
        margin: 0 auto;
        font-size: 18px;
        text-align: center;
        padding-bottom: 50px;
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
    h3{
        font-size: 20px;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    div.forma-dodaj-uredaj{
        text-align: left;
    }
    input[type=text], input[type=URL], input[type="number"], select{
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        float: left;
        margin-right: 25px;
        font-family: 'Montserrat';
        font-size: 16px;
        margin-bottom: 20px;
    }
    input[type=submit]{
        width: 48%;
        background-color: #4CAF50;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
        font-size: 16px;
        transition: 0.3s;
    }
    input[type=reset]{
        width: 48%;
        background-color: #AF504C;
        color: white;
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
        font-size: 16px;
        transition: 0.3s;
    }
    input[type=submit]:hover {
        background-color: #45a049;
        transition: 0.3s;
    }
    input[type=reset]:hover{   
        background-color: #923f3c;
        transition: 0.3s;
    }
    div.form-buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>