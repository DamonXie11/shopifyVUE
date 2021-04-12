<template>
  <div class="design-container">
    <div class="search-wrap">
      <el-col class="input-wrap">
        <div class="sider">
          <div style="font-size: 24px; color: #fff; margin-bottom: 14px">Europe Exquisite Package</div>
          <div style="font-size: 14px; color: #fff; margin-bottom: 56px">2019-09-22</div>
          <div style="font-size: 30px; color: #fff; margin-bottom: 40px">$ 150</div>
          <div style="border-top: 1px dashed #fff; margin-bottom: 40px"></div>
          <div>
            <img
              src="../assets/brand-placeholder1.jpg"
              style="width: 40px; height: 40px; border-radius: 50%; float: left; margin-right: 12px"
              alt=""
            >
            <div style="color: #fff; font-size: 18px; line-height: 40px;">Winter</div>
          </div>
        </div>
        <div class="btn-wrap">
          <span style="margin-right: 10px;">
            <el-button
              class="design"
              type="default"
              @click.native="showPod"
            >Design</el-button>
          </span>
          <router-link to="/mgr/packBuy">
            <el-button
              class="buy"
              type="default"
            >Buy</el-button>
          </router-link>
        </div>
      </el-col>
    </div>
    <div class="brand-wrap">
      <div class="brand-design">
        <header>Design Concept</header>
        <el-row
          :gutter="70"
          class="img-row"
        >
          <el-col
            :span="8"
            class="img-row-item"
          >
            <img
              src="../assets/o1.png"
              alt=""
            >
            <div>
              <!-- 简约 -->
              <div class="title">
                Simplify
              </div>
              <div class="desc">
                Right design makes the complexity simple, good details make the user more enjoyable.
              </div>
            </div>
          </el-col>
          <el-col
            :span="8"
            class="img-row-item"
          >
            <img
              src="../assets/j4.png"
              alt=""
            >
            <!-- 搭配 -->
            <div>
              <div class="title">
                Matching
              </div>
              <div class="desc">
                A visual, aesthetic, and artistic aesthetic through collocation
              </div>
            </div>
          </el-col>
          <el-col
            :span="8"
            class="img-row-item"
          >
            <img
              src="../assets/j5.png"
              alt=""
            >
            <!-- 形态 -->
            <div>
              <div class="title">
                Shape
              </div>
              <div class="desc">
                By giving the user a visual sense of beauty in the form of the product.
              </div>
            </div>
          </el-col>
          <el-col
            :span="8"
            class="img-row-item"
          >
            <!-- 色彩 -->
            <img
              src="../assets/j3.png"
              alt=""
            >
            <div>
              <div class="title">
                Color
              </div>
              <div class="desc">
                Color is very easy to cause people's emotional reaction and change. The special sensitivity of human vision to color determines the intuitive feeling of color design.
              </div>
            </div>
          </el-col>
          <el-col
            :span="8"
            class="img-row-item"
          >
            <!-- 造型 -->
            <img
              src="../assets/j1.png"
              alt=""
            >
            <div>
              <div class="title">
                Style
              </div>
              <div class="desc">
                Through the style design to close the distance between people, enhance the appeal of products to users
              </div>
            </div>
          </el-col>
          <el-col
            :span="8"
            class="img-row-item"
          >
            <img
              src="../assets/j2.png"
              alt=""
            >
            <div>
              <!-- 材料 -->
              <div class="title">
                Material
              </div>
              <div class="desc">
                According to the performance indicators of the materials required by the product, use various useful information to establish relevant models and formulate the expected product texture.
              </div>
            </div>
          </el-col>

        </el-row>
      </div>
    </div>
    <div class="logo-wrap">

      <div class="log-sub-wrap">
        <header>Package Design</header>
        <swiper
          :options="swiperOption"
          class="logo-swiper"
        >
          <swiper-slide><img
              src="../assets/m1.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="../assets/o2.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="../assets/o3.png"
              alt=""
            ></swiper-slide>
          <swiper-slide><img
              src="../assets/m1.png"
              alt=""
            ></swiper-slide>

        </swiper>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </div>
    </div>

    <div class="footer">
      ©2019 cjbranding.com All Rights Reserved.
    </div>
    <pod ref="pod"></pod>

  </div>

</template>
<script>
import "swiper/dist/css/swiper.css";
import Pod from "../components/pod.vue";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
    Pod
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // dialogVisible: true
      }
    };
  },
  methods: {
    showPod() {
      this.$refs.pod.printProFlag = true;
    },
    handleClose(done) {
      this.$confirm("Confirm")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {
    this.$message({
      message: "Please Pickup Package Style Below",
      type: "success"
    });
  }
};
</script>
<style lang="less" scoped>
.design-container {
  .search-wrap {
    position: absolute;
    width: 100%;
    height: 450px;
    background: url("../assets/n1.png") no-repeat;
    background-size: cover;
    background-position: -284px 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    cursor: pointer;
  }
  .input-wrap {
    width: 1200px;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    position: relative;
  }
  .sider {
    padding: 80px 32px 0 32px;
    position: absolute;
    right: 0;
    width: 300px;
    height: 100%;
    background: rgba(51, 51, 51, 0.5);
  }
  .btn-wrap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
    .design {
      background: #ee501f;
      border: none;
      color: #fff;
    }
    .buy {
      background: #fff;
      color: #ee501f;
      border: none;
    }
  }
  .search-item {
    font-size: 24px;
    text-align: center;
    width: 560px;
    header {
      margin-bottom: 20px;
    }
    // margin: 0 auto;
  }
  .brand-wrap {
    position: absolute;
    top: 540px;
    width: 100%;
    height: 540px;
    background: #fff;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .brand-design {
    font-size: 24px;
    padding: 80px 0 0 0;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    header {
      margin: 0 0 70px 0;
    }
  }
  .img-row {
    text-align: left;
    .img-row-item {
      margin-bottom: 70px;
    }
    img {
      margin-bottom: 40px;
      float: left;
      margin-right: 14px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .desc {
      color: #666666;
      font-size: 16px;
    }
  }
  .img-left {
    min-height: 475px;
    cursor: pointer;
  }
  .logo-wrap {
    padding-top: 80px;
    position: absolute;
    top: 1067px;
    width: 100%;
    height: 440px;
    background: rgba(248, 248, 248, 1);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    .log-sub-wrap {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      header {
        margin-bottom: 40px;
        font-size: 18px;
        text-align: left;
        color: #333333;
      }
    }
    .logo-swiper {
      // width: 1050px;
      // margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
  .wrap-logo {
    position: absolute;
    top: 1666px;
    width: 100%;
    height: 544px;
    // background: rgba(248, 248, 248, 1);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    .wrap-sub-logo {
      width: 845px;
      margin: 0 auto;
      header {
        text-align: center;
        font-size: 24px;
        padding: 80px 0;
      }
      .item-img {
        text-align: center;
        img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
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
    top: 1600px;
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
.design-container {
  .brand-carousel {
    width: 1000x;
    margin: 0 auto;
  }
  .swiper-pagination {
    top: 0;
    right: 0;
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      margin-left: 10px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(153, 153, 153, 1);
      &:focus {
        outline: none;
      }
    }
    .swiper-pagination-bullet-active {
      border: 2px solid rgba(238, 80, 31, 1);
    }
  }
}
</style>