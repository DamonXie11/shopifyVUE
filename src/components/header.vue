<template>
  <div class="layout-header">
    <header>
      <div class="logo cursor-pointer" @click="goto('/home')">
        <img :src="logo" />
      </div>
      <div class="nav-list">
        <router-link
          tag="div"
          v-for="(item, idx) of navList"
          :class="['list-item', 'cursor-pointer', { activated: item.activated }]"
          :to="`/${item.path}`"
          :key="idx"
          @mouseenter.native="toggleDropMenu(true, idx)"
          @mouseleave.native="toggleDropMenu(false, idx)"
        >
          {{item.name}}
          <span
            v-if="item.children"
            :class="['iconfont', 'drop-icon', { visible: item.visible }]"
          >&#xe616;</span>
          <div v-if="item.children" :class="['dorp-list', { visible: item.visible }]">
            <router-link
              tag="div"
              v-for="(item2, idx) of item.children"
              :class="['drop-list-item', 'cursor-pointer']"
              :to="`/${item.path}/${item2.path}`"
              :key="idx"
            >{{item2.name}}</router-link>
          </div>
        </router-link>
      </div>
      <div class="login-logout" v-if="!userInfo.userName">
        <span class="btn login" @click="login">Log in</span>
        <!--<span class="btn logout activated" @click="logout">Sign up</span>-->
      </div>
      <div v-if="userInfo.userName">
        <el-avatar size="large" :src="userInfo.image"></el-avatar>
      </div>
    </header>
  </div>
</template>

<script>
import { routes } from "@/router/routes";
import store from "store";

export default {
  name: "layout-header",
  data() {
    return {
      navList: this.navListProcessor(routes.children),
      logo: require("@/assets/logo.svg"),
      userInfo: {}
    };
  },
  methods: {
    navListProcessor(routes) {
      return routes
        .map(route => {
          if (Array.isArray(route.children)) {
            route.children = this.navListProcessor(route.children);
          }
          return {
            ...route,
            activated: this.$router.currentRoute.path.endsWith(route.path) // backgroun-color
          };
        })
        .filter(_ => !_.hide);
    },
    toggleDropMenu(bool, idx) {
      this.navList = this.navList.map((nav, i) => {
        if (idx === i) nav.visible = bool;
        return nav;
      });
    },
    login() {
      this.$router.push("/login");
    },
    logout() {},
    goto(url) {
      this.$router.replace(url);
    }
  },
  watch: {
    $route() {
      this.navList = this.navListProcessor(routes.children);
    }
  },
  created() {
    const userInfo = store.get("userInfo") || {};

    if (typeof userInfo === "object") {
      this.userInfo = userInfo;
    }
  },
  mounted() {
    // console.log(this.navList, routes);
    // console.log(this.$router);
  }
};
</script>

<style lang="less" scoped>
.layout-header {
  position: relative;
  background: rgba(255, 255, 255, 1);
  color: #333;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    box-shadow: 0px 2px 8px 0px rgba(214, 214, 214, 1);
  }
  header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    .logo {
      // width: 253px;
      height: 70px;
      // background: rgba(216, 216, 216, 1);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 2px;
    }
    .nav-list {
      display: flex;
      justify-content: flex-start;
      height: 100%;
      margin-left: 40px;
      flex: 1;
      .list-item {
        position: relative;
        height: 100%;
        line-height: 90px;
        padding: 0 19px;
        display: flex;
        align-items: center;
        &::before {
          content: "";
          position: absolute;
          height: 2px;
          background-color: transparent;
          left: 0;
          top: 0;
          right: 0;
          transition: 140ms;
        }
        &:hover {
          color: #ee501f;
          &::before {
            background-color: #ee501f;
          }
        }
        &.activated {
          color: #ee501f;
        }
        .dorp-list {
          position: absolute;
          width: 200px;
          left: 50%;
          top: 100%;
          box-shadow: 0px 2px 8px 0px rgba(214, 214, 214, 1);
          background: #fff;
          color: #333;
          transition: 290ms;
          opacity: 0;
          z-index: 4;
          transform: translateX(-50%) scale(1, 0);
          transform-origin: top;
          transition-delay: 90ms;
          &.visible {
            opacity: 1;
            transition-delay: 0ms;
            transform: translateX(-50%) scale(1, 1);
          }
          .drop-list-item {
            transition: 140ms;
            padding: 11px 0;
            height: 20px;
            line-height: 20px;
            &:hover {
              color: #fff;
              background-color: #ee501f;
            }
          }
        }
        .drop-icon {
          font-size: 13px;
          margin-left: 6px;
          transition: 290ms;
          &.visible {
            transform: rotate(180deg);
          }
        }
      }
    }
    .login-logout {
      display: flex;
      align-items: center;
      .login {
        &:hover {
          border-color: #ee501f;
          color: #ee501f;
          box-shadow: 0 0 2px #ee501f;
        }
      }
      .btn {
        height: 40px;
        width: 110px;
        line-height: 40px;
        border-radius: 2px;
        border: 1px solid #d9d9d9;
        transition: 240ms;
        .cursor-pointer;
        &.activated {
          border-color: #ee501f;
          background-color: #ee501f;
          color: #fff;
        }
        &.logout {
          margin-left: 10px;
        }
      }
    }
  }
}
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}
</style>
<style lang="less">
.layout-header {
  .el-avatar--large {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}
</style>
