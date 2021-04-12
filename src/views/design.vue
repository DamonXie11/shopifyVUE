<template>
  <div class="brand-container">
    <div class="search-wrap">
      <el-col class="input-wrap">
        <div class="search-item">
          <header>Every business is unique, find the branding design that suits you.</header>
          <!-- <el-form>
            <el-form-item style="width: 560px; margin: 0 auto;">
              <el-input
                suffix-icon="el-icon-search"
                placeholder="Search desired desgin  "
              ></el-input>
            </el-form-item>
          </el-form> -->
        </div>

      </el-col>
    </div>
    <div class="brand-wrap">
      <div class="brand-design container">
        <header>Brand Design Area</header>
        <el-row
          :gutter="18"
          class="img-row"
        >
          <router-link to="/mgr/designDetail">
            <el-col
              :span="12"
              class="img-left"
            >
              <img
                src="../assets/b1.png"
                alt=""
              >
            </el-col>
          </router-link>

          <el-col :span="12">
            <el-row :gutter="18">
              <el-col :span="12">
                <img
                  src="../assets/b2.png"
                  alt=""
                >
              </el-col>
              <el-col :span="12">
                <img
                  src="../assets/b3.png"
                  alt=""
                >
              </el-col>
              <el-col :span="12">
                <img
                  src="../assets/b4.png"
                  alt=""
                >
              </el-col>
              <el-col :span="12">
                <img
                  src="../assets/b5.png"
                  alt=""
                >
              </el-col>
            </el-row>
          </el-col>

        </el-row>
      </div>
    </div>
    <div class="logo-wrap">
      <header>Package Design</header>
      <div class="log-sub-wrap container">
        <swiper
          :options="swiperOption"
          class="logo-swiper"
        >
          <swiper-slide><img
              src="../assets/d1.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="../assets/h1.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="../assets/h2.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="../assets/h3.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="../assets/d1.png"
              alt=""
            ></swiper-slide>

        </swiper>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next"
          slot="button-next"
        ></div>

      </div>
    </div>
    <div class="wrap-logo">
      <div class="wrap-sub-logo container">
        <header>Logo</header>
        <el-row
          :gutter="80"
          type="flex"
          justify="space-between"
        >
          <el-col
            :span="8"
            class="item-img"
          ><img
              src="../assets/a1.jpg"
              alt=""
            >
            <div class="title">
              Firefox
            </div>
            <div class="desc">
              <!-- Firefox refers to the "red panda" in the English proverb, but separates "Fire" and "Fox" to translate the meaning, designing the mascot and official icons as flaming little foxes. -->
            </div>
          </el-col>
          <el-col
            :span="8"
            class="item-img"
          ><img
              src="../assets/a2.jpg"
              alt=""
            ></el-col>
          <el-col
            :span="8"
            class="item-img"
          ><img
          style="margin-top: -38px;"
              src="../assets/a3.png"
              alt=""
            ></el-col>
        </el-row>
      </div>

    </div>
    <div class="footer">
      ©2019 cjbranding.com All Rights Reserved.
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.brand-container {
  .search-wrap {
    // position: absolute;
    // width: 100%;
    height: 450px;
    background: rgba(0, 0, 0, 0.3) url("../assets/design-bg.png") no-repeat center;
    // background-color: rgba(0,0,0.3);
    background-size: cover;
    // left: 50%;
    // transform: translateX(-50%);
    z-index: 1;
  }
  .input-wrap {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-item {
    font-size: 24px;

    text-align: center;
    width: 700px;
    header {
      margin-bottom: 20px;
      color: #ffffff;
    }
    // margin: 0 auto;
  }
  .brand-wrap {
    position: absolute;
    top: 540px;
    width: 100%;
    height: 700px;
    background: rgba(248, 248, 248, 1);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .brand-design {
    font-size: 24px;
    padding: 80px 0;
    // width: 1200px;
    // margin: 0 auto;
    text-align: center;
    header {
      margin-bottom: 20px;
    }
  }
  .img-row {
    img {
      width: 100%;
    }
  }
  .img-left {
    min-height: 475px;
    cursor: pointer;
  }
  .logo-wrap {
    position: absolute;
    top: 1240px;
    width: 100%;
    height: 426px;
    padding-top: 80px;
    background: rgba(238, 80, 31, 0.05);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    header {
      margin-bottom: 40px;
      font-size: 24px;
      text-align: center;
    }
    .log-sub-wrap {
      position: relative;
      // width: 1200px;
      margin: 0 auto;
    }
    .logo-swiper {
      width: 1050px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
  .wrap-logo {
    position: absolute;
    top: 1745px;
    width: 100%;
    height: 650px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    .wrap-sub-logo {
      // width: 845px;
      // margin: 0 auto;
      padding: 0 388px;
      header {
        text-align: center;
        font-size: 24px;
        padding: 80px 0;
      }
      .item-img {
        text-align: center;
        img {
          width: 150px;
          // height: 180px;
          // border-radius: 50%;
          // &:nth-child(2) {
          //   margin-top: -4px;
          // }
        }
        .title {
          margin: 20px 0 8px 0;
          font-size: 18px;
          color: #333333;
        }
        .desc {
          font-size: 14px;
          color: #9999;
          text-align: left;
        }
      }
    }
  }
  .footer {
    position: absolute;
    top: 2335px;
    left: 0;
    height: 20px;
    bottom: 0;
    width: 100%;
    text-align: center;
    line-height: 20px;
    padding: 20px 0;
    background-color: #40424c;
    color: #fff;
  }
}
</style>
<style lang="less">
.brand-container {
  .brand-carousel {
    width: 1000x;
    margin: 0 auto;
  }
  .swiper-button-prev {
    margin-top: 0;
    height: 100%;
    transition: all 1s;
    width: 55px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(../assets/arrow-left.png);
    background-size: 12px 12px;
    left: 0;
    &:hover {
      background: rgba(217, 217, 217, 0.3);
      background-image: url(../assets/arrow-left.png);
      background-size: 12px 12px;
      background-repeat: no-repeat;
      background-position: center center;
    }
    &:focus {
      outline: none;
    }
  }
  .swiper-button-next {
    margin-top: 0;
    transition: all 1s;
    height: 100%;
    width: 55px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(../assets/arrow-right.png);
    // background-color: #fff;
    background-size: 12px 12px;
    &:hover {
      background: rgba(217, 217, 217, 0.3);
      background-image: url(../assets/arrow-right.png);
      background-size: 12px 12px;
      background-repeat: no-repeat;
      background-position: center center;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>