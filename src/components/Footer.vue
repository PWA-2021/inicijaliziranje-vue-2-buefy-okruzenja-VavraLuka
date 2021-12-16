<template>
    <div class="footer-container" id="footer">
        <h1 class="naslov">Audio Portal</h1>
        <h2 class="podnaslov">Online platforma za prodaju i najam audio opreme</h2>
        <div>
            <p>Sva prava pridržana, 2021. Audio Portal</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.footer-container{
        width: 100%;
        margin: 0 auto;
        font-size: 18px;
        text-align: center;
        background-color: #333;
        padding-top: 30px;
        padding-bottom: 50px;
    }
    div.footer-container p{
        color: lightgray;
        font-size: 14px;
    }
    h1{
        font-size: 24px;
        font-weight: 500;
        margin-top: 30px;
        color: white;
    }
    h2{
        font-size: 14px;
        margin-bottom: 30px;
        color: lightgray;
    }
</style>