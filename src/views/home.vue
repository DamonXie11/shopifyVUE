<template>
  <div class="home animate-fade">
    <Banner />
    <div class="hot-brand animate-up">
      <div class="title">Branding Showup</div>
      <div class="cord-box">
        <goods-card
          v-for="(goods, idx) of goodsList"
          :key="idx"
          :goods="goods"
          @click.native="goto('mgr/designDetail')"
        />
      </div>
      <div class="view-more" @click="goto('/mgr/design')">View More</div>
    </div>
    <div class="video-box-bg">
      <div class="video-box" ref="videoBox">
        <div
          :class="`video-item ${idx === 0 ? 'animate-left': 'animate-right'}`"
          v-for="(video, idx) of videoList"
          :key="idx"
        >
          <div class="video-wrap">
            <video :src="video.url" controls="controls" :poster="video.poster"></video>
          </div>
          <div class="bottom-half">
            <div class="title">{{video.title}}</div>
            <div class="sub-title">{{video.subTitle}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-read">
      <div class="title">Reading</div>
      <div class="sub-title">How to use CJbranding APP?</div>
      <div class="bottom-harf">
        <div class="left">
          <div
            v-for="(item, idx) of recommendList"
            :class="['text-item', { activated: recommendIdx === idx}]"
            :key="idx"
            @mouseenter="changeRecommendIdx(idx)"
          >
            <div class="item-title">{{item.title}}</div>
            <div class="item-sub-title">{{item.subTitle}}</div>
          </div>
        </div>
        <div class="right">
          <div
            v-for="(item, idx) of recommendList"
            :class="['img-item', { activated: recommendIdx === idx}]"
            :key="idx"
          >
            <img :src="item.image" />
          </div>
        </div>
      </div>
    </div>

    <!-- 授权密码弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <el-input v-model="authPassword" placeholder="Please inpute password"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleSubpsw">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from "element-ui";
import goodsCard from "@/components/goods-card";
import { localSet } from "@/utils";
import { authLogin, authorize, subAuthpsw } from "../api/auth";
import md5 from "blueimp-md5";
import Banner from "@/components/home-banner";

export default {
  name: "home",
  components: {
    goodsCard,
    Banner
  },
  data() {
    return {
      goodsList: [
        {
          image: require("@/assets/img/home/hot-design1.png"),
          title: "Europe Exquisite Package",
          avatar: require("@/assets/img/home/hot-design4.png"),
          username: "Alex",
          time: "4 days",
          like: 144,
          follow: 14
        },
        {
          image: require("@/assets/img/home/hot-design2.png"),
          title: "Tea Package Desgin",
          avatar: require("@/assets/img/home/hot-design3.png"),
          username: "Kevin",
          time: "2 days",
          like: 110,
          follow: 9
        },
        {
          image: require("@/assets/img/home/hot-design3.png"),
          title: "Toys Package",
          avatar: require("@/assets/img/home/hot-design2.png"),
          username: "Andy",
          time: "3 days",
          like: 240,
          follow: 99
        },
        {
          image: require("@/assets/img/home/hot-design4.png"),
          title: " England Metal Box Pacakge",
          avatar: require("@/assets/img/home/hot-design1.png"),
          username: "Jenni",
          time: "9 h",
          like: 40,
          follow: 1
        }
      ],
      videoList: [
        {
          url:
            "https://miandan.cjdropshipping.com/js-lib/shopify-video/home-video1.mp4",
          title: "eCommerce branding desgin—how important to desgin a brand.",
          subTitle:
            "Branding package has been becoming a new consummer trendy.",
          poster: require("@/assets/shopify-video/poster1.svg")
        },
        {
          url:
            "https://miandan.cjdropshipping.com/js-lib/shopify-video/home-video2.mp4",
          title: "Apple Intention Branding Package.",
          subTitle: "Knowing how to desgin in 5 minutes.",
          poster: require("@/assets/shopify-video/poster2.svg")
        }
      ],
      recommendIdx: 0,
      recommendList: [
        {
          title: "First step: ",
          subTitle:
            "Click 【Package Desgin】 Select the package you want to design.",
          image: require("@/assets/img/home/read1.png")
        },
        {
          title: "The second step: ",
          subTitle: "Design on package template, build your own brands.",
          image: require("@/assets/img/home/read2.png")
        },
        {
          title: "The third step: ",
          subTitle:
            "You will need to complete the connection from your products with CJ Package.",
          image: require("@/assets/img/home/read3.png")
        }
      ],
      authPassword: null,
      dialogVisible: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit(
        "set_videoRect",
        this.$refs.videoBox.getBoundingClientRect()
      );
    }, 1400);
    this.isAuth();
  },
  methods: {
    changeRecommendIdx(idx) {
      this.recommendIdx = idx;
    },
    goto(url) {
      this.$router.push(url);
    },
    isAuth() {
      const {
        code = null,
        shop = null,
        state = null,
        shopToken
      } = this.$route.query;
      if (code && state === "shopify") {
        const parms = {
          code,
          name: shop
        };
        authorize(parms)
          .then(res => {
            const { code, data } = res.data;
            if (code === 200) {
              localSet("userInfo", data);
              this.dialogVisible = true;
              Message({
                message: "Authorization Success",
                type: "success",
                duration: 5 * 1000
              });
            } else {
              Message({
                message: "Authorization Failed",
                type: "error",
                duration: 5 * 1000
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else if (state === "shopify" && shopToken) {
        authLogin(shopToken)
          .then(res => {
            const { code, data } = res.data;
            if (code === 200) {
              localSet("userInfo", data);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },

    handleSubpsw() {
      subAuthpsw({ password: md5(this.authPassword) })
        .then(res => {
          if (res.data.code === 200) {
            Message({
              message: "Reset Password Success",
              type: "success",
              duration: 5 * 1000
            });
            this.dialogVisible = false;
            this.$router.replace("/mgr/designDetail");
          }
        })
        .catch(err => {
          this.dialogVisible = false;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.section-padding {
  padding: 80px 0;
}

.home {
  .hot-brand {
    .container;
    .section-padding;
    text-align: center;
    .title {
      line-height: 33px;
      font-size: 24px;
    }
    .cord-box {
      padding: 40px 0;
      display: flex;
      justify-content: space-between;
    }
    .view-more {
      width: 220px;
      border-radius: 2px;
      border: 1px solid #ee501f;
      margin: 0 auto;
      font-size: 16px;
      font-weight: 400;
      color: #ee501f;
      line-height: 40px;
      .cursor-pointer;
      transition: 240ms;
      &:hover {
        color: #fff;
        background-color: #ee501f;
      }
    }
  }
  .video-box-bg {
    .section-padding;
    background-color: #f8f8f8;
  }
  .video-box {
    .container;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .video-item {
      width: 49.4%;
      background-color: #fff;
      .video-wrap {
        height: 298px;
        overflow: hidden;
        video {
          width: 100%;
          object-fit: cover;
        }
      }
      .bottom-half {
        padding: 20px 10px;
        .title {
          font-size: 18px;
        }
        .sub-title {
          color: #999;
        }
      }
      &.animate-left {
        animation: animate-left @aimate-slow;
      }
      &.animate-right {
        animation: animate-right @aimate-slow;
      }
    }
  }
  .recommend-read {
    .container;
    padding: 40px 0;
    .title {
      text-align: center;
      line-height: 33px;
      font-size: 24px;
    }
    .sub-title {
      line-height: 25px;
      font-size: 18px;
      margin-top: 40px;
    }
    .bottom-harf {
      margin-top: 20px;
      display: flex;
      .left {
        width: 529px;
        .text-item {
          padding: 32px 20px;
          cursor: pointer;
          &.activated {
            background-color: rgba(248, 248, 248, 1);
          }
          .item-title {
            font-size: 16px;
            line-height: 22px;
          }
          .item-sub-title {
            margin-top: 10px;
            color: #666;
          }
        }
      }
      .right {
        flex: 1;
        position: relative;
        overflow: hidden;
        // box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
        margin-left: 14px;
        .img-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: 400ms;
          &.activated {
            opacity: 1;
          }
          img {
            object-fit: cover;
          }
        }
      }
    }
  }
}
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}
.animate-down {
  animation: animate-down @aimate-slow;
}
.animate-up {
  animation: animate-up @aimate-slow;
}
.animate-fade {
  animation: animate-fade @aimate-slow;
}

@keyframes animate-left {
  0% {
    opacity: 0.04;
    transform: translateX(-44%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes animate-right {
  0% {
    opacity: 0.04;
    transform: translateX(44%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes animate-down {
  0% {
    opacity: 0.04;
    transform: translateY(-14%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animate-up {
  0% {
    opacity: 0.04;
    transform: translateY(14%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes animate-fade {
  0% {
    opacity: 0.04;
  }
  100% {
    opacity: 1;
  }
}
</style>
