<template>
  <div :class="['layout', {
    'bg-color-f4': currentPath.includes('private-custom')
  }]">
    <LayoutHeader />
    <div class="layout-container">
      <!-- <transition name="fade"> -->
        <keep-alive>
          <router-view />
        </keep-alive>
      <!-- </transition> -->
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from "@/components/header";
import LayoutFooter from "@/components/footer";

export default {
  name: "layout",
  data() {
    return {
      currentPath: this.$router.currentRoute.path
    };
  },
  methods: {
    redirect() {
      if (this.$router.currentRoute.path === "/") {
        this.$router.replace("home"); // redirect to home
      }
    },
    matchRouterForBanner() {
      return this.$router.currentRoute.path.endsWith("home");
    }
  },
  watch: {
    $route() {
      this.currentPath = this.$router.currentRoute.path;
      this.isHomePage = this.matchRouterForBanner();
    }
  },
  components: {
    LayoutHeader,
    LayoutFooter
  },
  created() {
    this.redirect();
  },
  mounted() {}
};
</script>

<style lang="less" scope>
.layout {
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px;
  box-sizing: border-box;
  .layout-container {
    max-width: 100vw;
    overflow-x: hidden;
    .fade-enter-active,
    .fade-leave-active {
      padding-left: calc(100vw - 100%);
    }
  }
  &.bg-color-f4 {
    background-color: #f4f4f4;
  }

  /*Vue 动画效果*/
  .fade-enter-active {
    animation: animate-fade-in 999ms;
  }
  .fade-leave-active {
    animation: animate-fade-out 444ms;
  }
}

@keyframes animate-fade-in {
  0% {
    opacity: 0.01;
    transform: translateY(4%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes animate-fade-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0.01;
    transform: translateY(4%);
  }
}
</style>
