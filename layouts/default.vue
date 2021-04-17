<template>
  <div>
    <h5 class="head">这是默认头部</h5>
    <div class="main">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/home">HOME</nuxt-link>
        <nuxt-link to="/order">order</nuxt-link>
        <nuxt-link to="/goods">商品列表</nuxt-link>
        <nuxt-link to="/userinfo">个人</nuxt-link>
    </div>
    <Nuxt />
    <h5 class="foot">这是默认顶部</h5>
  </div>
</template>

<script>
    export default {}
</script>

<style>
    /* .head {
        position: absolute;
        left: 0;
        top: 0;
        margin-bottom: 20px;
    } */
    
    .main {
        margin-top: 40px;
    }
    /* .foot {
        position: absolute;
        left: 0;
        bottom: 0;
        margin-top: 20px;
    } */
    
    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.5s;
    }
    
    .page-enter,
    .page-leave-to {
        opacity: 0;
    }
    
    .layout-enter-active,
    .layout-leave-active {
        transition: opacity 0.5s;
    }
    
    .layout-enter,
    .layout-leave-to {
        opacity: 0;
    }
    
    .slide-bottom-enter-active,
    .slide-bottom-leave-active {
        transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
    }
    
    .slide-bottom-enter,
    .slide-bottom-leave-to {
        opacity: 0;
        transform: translate3d(0, 15px, 0);
    }
    
    .bounce-enter-active {
        transform-origin: top;
        animation: bounce-in 0.8s;
    }
    
    .bounce-leave-active {
        transform-origin: top;
        animation: bounce-out 0.5s;
    }
    
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(0);
        }
    }
</style>