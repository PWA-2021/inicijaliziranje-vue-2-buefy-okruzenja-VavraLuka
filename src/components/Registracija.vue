<template>
    <div class="registracija-container" id="registracija">
        <h1 class="naslov">Registracija korisnika</h1>
        <h2 class="podnaslov">Registrirajte se kako bi mogli postaviti Vaše oglase ili kontaktirati ostale prodavače.</h2>
        <div class="forma-registracija">
            <form class="registracija">
                <label for="ime-i-prezime">Vaše ime i prezime:</label><br>
                <input type="text" name="ime-i-prezime" id="ime-i-prezime" placeholder="Ime i prezime"><br><br>
                <label for="email">Vaša email adresa:</label><br>
                <input type="email" name="email" id="email" placeholder="Email"><br><br>
                <label for="korisnicko-ime">Vaše korisničko ime:</label><br>
                <input type="text" name="korisnicko-ime" id="korisnicko-ime" placeholder="Korisničko ime"><br><br>
                <label for="lokacija">Lokacija (neobavezno, služi za pronalak oglasa koji su Vam blizu):</label>
                <input type="text" name="lokacija" id="lokacija" placeholder="Lokacija"><br><br>
                <label for="kontakt-broj">Kontakt broj (neobavezno, služi za lakši kontakt s kupcem/prodavačem):</label>
                <input type="text" name="kontakt-broj" id="kontakt-broj" placeholder="Kontakt broj oblika +385 xx xxxx xxx"><br><br>
                <label for="lozinka">Lozinka:</label><br>
                <input type="password" name="lozinka" id="lozinka" placeholder="Lozinka"><br><br>
                <label for="ponovljena-lozinka">Ponovljena lozinka:</label><br>
                <input type="password" name="ponovljena-lozinka" id="ponovljena-lozinka" placeholder="Ponovljena lozinka"><br><br>
                <div class="form-buttons">
                    <input type="submit" name="submit" value="Registriraj se">
                    <input type="reset" value="Obriši podatke">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Registracija',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.registracija-container{
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
    hr{
        width: 70%;
        margin: 0 auto;
        border: 1px solid rgba(1, 1, 1, 0.25);
    }
    div.forma-registracija{
        text-align: left;
        margin: 0 auto;
        width: 70%;    
    }
    input[type=text], input[type=password], input[type=email], select{
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