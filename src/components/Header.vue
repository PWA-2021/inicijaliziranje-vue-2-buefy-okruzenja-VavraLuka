<template>
    <div class="header-container" id="header">
        <div class="naslovna-fotografija"></div>
        <h1 class="naslov">Dobrodošli na Audio Portal</h1>
        <h2 class="podnaslov">Online platforma za prodaju i najam audio opreme</h2>
        <hr>
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
    div.naslovna-fotografija{
        height: 400px;
        margin: 0 auto;
        background-image: url("https://cutewallpaper.org/24/speakers-png/speaker-png-images.png");
        background-position: center;
        background-repeat: no-repeat;
    }
    hr{
    width: 61%;
    margin: 0 auto;
    border: 1px solid rgba(1, 1, 1, 0.25);
    }
    div.header-container{
        width: 70%;
        margin: 0 auto;
        font-size: 16px;
        text-align: center;
    }
    h1{
        font-size: 50px;
        font-weight: 500;
        margin-top: 20px;
        letter-spacing: -1.8px;
    }
    h2{
        font-size: 28px;
        margin-bottom: 80px;
        letter-spacing: -1.8px;
    }
</style>