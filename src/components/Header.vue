<template>
    <div class="header-container" id="header">
        <h1 class="naslov">Dobrodošli na Audio Portal</h1>
        <h2 class="podnaslov">Online platforma za prodaju i najam audio opreme</h2>
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
    div.header-container{
        width: 70%;
        margin: 0 auto;
        font-size: 18px;
        text-align: center;
    }
    h1{
        font-size: 60px;
        font-weight: 500;
        margin-top: 80px;
        letter-spacing: -1.8px;
    }
    h2{
        font-size: 35px;
        margin-bottom: 80px;
        letter-spacing: -1.8px;
    }
</style>