<template>
    <div class="prijava-container" id="prijava">
        <h1 class="naslov">Prijava korisnika</h1>
        <h2 class="podnaslov">Prijavite se u svoj korisnički račun.</h2>
        <div class="forma-prijava">
            <form class="prijava" action="">
                <label for="korisnicko_ime">Vaša email adresa ili korisničko ime:</label><br>
                <input type="text" name="korisnicko_ime" id="korisnicko_ime" placeholder="Email adresa ili korisničko ime"><br><br>
                <label for="lozinka">Lozinka:</label><br>
                <input type="password" name="lozinka" id="lozinka" placeholder="Lozinka"><br><br>
                <div class="form-buttons">
                    <input type="submit" name="submit" value="Prijavi se">
                    <input type="reset" value="Obriši podatke">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Prijava',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.prijava-container{
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
    div.forma-prijava{
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