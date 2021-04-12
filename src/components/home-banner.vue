<template>
  <div class="banner" :style="{ 'background-image': `url(${banner1})` }">
    <div class="container">
      <div class="content-text">
        <div class="animate-down">{{text}}</div>
        <div class="btn animate-up" @click="goto('/mgr/design')">Start to Desgin</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner1: require("@/assets/img/banner1.png"),
      text:
        // "CJbranding offer the entire branding solution for your ecommerce orders, your buyer definetly love your store and buying again."
        "Branding Solution for Shopify Merchants, Buyer Definetly Will Love Your Store and Buy Again."
    };
  },
  methods: {
    goto(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  background-position: center center;
  background-repeat: no-repeat;
  .container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    height: 450px;
    img {
      object-fit: cover;
    }
    .content-text {
      position: absolute;
      top: 45%;
      left: 50%;
      width: 444px;
      font-size: 24px;
      line-height: 40px;
      transform: translateX(-50%);
      overflow: hidden;
      .animate-down {
        animation: animate-down @aimate-slow;
      }
      .animate-up {
        animation: animate-up @aimate-slow;
      }
    }
    .btn {
      margin: 19px auto 0;
      color: #fff;
      background-color: #ee501f;
      font-size: 16px;
      line-height: 22px;
      padding: 13px 0;
      width: 220px;
      text-align: center;
      border-radius: 2px;
      cursor: pointer;
      user-select: none;
      transition: 240ms;
      &:hover {
        opacity: 0.79;
        // box-shadow: 0 0 2px #999;
      }
    }
  }
}

@keyframes animate-down {
  0% {
    opacity: 0.04;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animate-up {
  0% {
    opacity: 0.04;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
