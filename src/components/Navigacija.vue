<template>
<div class="navigacija">
    <div class="navbar-container" id="navigacija">
        <ul>
            <li class="li-left"><a href="../App.vue">Početna</a><li>
            <li class="li-left"><a href="#katalog-uredaja">Katalog uređaja</a></li>
            <li class="li-left"><a href="#dodavanje-uredaja">Dodaj uređaj</a></li>
            <li class="li-right"><a href="#registracija" id="open-registracija">Registracija</a></li>
            <li class="li-right"><a href="#prijava" id="open-prijava">Prijava</a></li>
    <!--    <li class="li-right"><a href="#moj-profil">Moj profil</a></li>
            <li class="li-right"><a href="#odjava">Odjava</a></li> -->
        </ul>
    </div>
    <div id="registracija-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
        </div>
    </div>
    <div id="prijava-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Navigacija',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
    /* Početak stiliziranja modala */
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
        .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
        .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    /* Kraj stiliziranja modala */

    div.navigacija{
        text-align: center;
        width: 100%;
        background-color: #333;
    }
    div.navbar-container{
        width: 70%;
        margin: 0 auto;
        font-size: 16px;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    li.li-left{
        float: left;
    }
    li.li-right{
        float: right;
    }
    li a{
        transition: 0.3s;
        display: block;
        color: white;
        text-align: center;
        padding: 18px 20px;
        text-decoration: none;
    }
    li a:hover{
        background-color: #111;
    }
</style>