<template>
  <div class="pack-mine container">
    <div class="pack-wrap">
      <el-row :gutter="30">
        <el-col>
          <el-row>
            <el-col
              v-for="(i ,index) in  list"
              :key='index'
              :span="12"
              class="pack-item"
            >
              <el-row
                type="flex"
                justify="space-between"
              >
                <el-col class="pack-item-row">
                  <img
                    :src="i.image || defaultImg"
                    alt=""
                  >
                </el-col>
                <el-col>
                  <el-row>
                    <el-col class="title">
                      {{i.title}}
                    </el-col>
                    <el-col class="price">
                      {{i.sku}}
                    </el-col>
                    <el-col class="sku">
                      {{i.message}}
                    </el-col>
                    <el-col class="price2">
                      ${{i.price}}
                    </el-col>

                    <el-col>
                      <el-row
                        type="flex"
                        justify="space-bewteen"
                      >
                        <el-col>
                          <el-button
                            class="delete"
                            @click="deletePack(i.id)"
                          >Delete</el-button>
                          <el-button class="buy" @click="$router.push('/mgr/packBuy')">Buy</el-button>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>

        <!-- <el-col>
       
      </el-col> -->
      </el-row>
    </div>
    <div class="filter-wrap">
      <div
        @click.prevent="handClick('All')"
        :class="{'active': key == 'All'}"
      >All</div>
      <div
        @click.prevent="handClick('Boxs')"
        :class="{'active': key == 'Boxs'}"
      >Boxs Line</div>
      <div
        @click.prevent="handClick('Paper')"
        :class="{'active': key == 'Paper'}"
      >Paper Bags Line</div>
      <div
        @click.prevent="handClick('Pricing')"
        :class="{'active': key == 'Pricing'}"
      >Pricing Tags Line</div>
      <div
        @click.prevent="handClick('Small')"
        :class="{'active': key == 'Small'}"
      >Small Parts Line</div>
      <div
        @click.prevent="handClick('Inserts')"
        :class="{'active': key == 'Inserts'}"
      >Inserts Line</div>
      <div
        @click.prevent="handClick('Metals')"
        :class="{'active': key == 'Metals'}"
      >Metals Line</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      key: "All",
      defaultImg: require("../assets/brand-placeholder1.jpg")
    };
  },
  methods: {
    handClick(value) {
      console.log(value);
      this.key = value;
      if (value === "All") {
        this.$store.dispatch("MyPackList", {}).then(res => {
          this.list = res.data.data.list;
        });
      } else {
        this.$store
          .dispatch("MyPackList", { model: { property: value } })
          .then(res => {
            this.list = res.data.data.list;
          });
      }
    },
    deletePack(id) {
      this.$store.dispatch("DeletePack", { id: id }).then(res => {
        if (res.data.code == "200") {
          this.$message.success("Delete Success");
          this.key = "All";
          this.$store.dispatch("MyPackList", {}).then(res => {
            this.list = res.data.data.list;
          });
        }
        console.log(res);
      });
    }
  },
  mounted() {
    this.$store.dispatch("MyPackList", {}).then(res => {
      this.list = res.data.data.list;
      console.log(res.data.data);
    });
  }
};
</script>
<style lang="less" scoped>
.pack-mine {
  // position: absolute;
  // width: 100%;
  // left: 50%;
  // height: calc(100% - 90px);
  background: rgba(248, 248, 248, 1);
  // height: 100vh;
  // transform: translateX(-50%);
  .pack-wrap {
    width: 1200px;
    padding: 30px 0 0 0;
    margin: 0 auto;
  }
  .pack-item {
    border-radius: 8px;
    background: #fff;
    // box-shadow: 0 0 0 2px #000;
    .pack-item-row {
      margin-right: 20px;
    }
    img {
      width: 100%;
      // height: 240px;
      border-radius: 8px 0px 0px 8px;
    }
    .title {
      margin: 10px 0 6px 0;
      font-size: 20px;
      color: #000;
    }
    .price {
      margin: 6px 0 6px 0;
      font-size: 14px;
      color: #333333;
    }
    .price2 {
      margin: 6px 0 10px 0;
      font-size: 26px;
      color: #ee1f1f;
    }
    .sku {
      margin: 10px 0 10px 0;
      font-size: 14px;
      color: #333333;
    }
    .delete {
      width: 100px;
      background: rgba(255, 255, 255, 1);
      border-radius: 2px;
      border: 1px solid rgba(153, 153, 153, 1);
    }
    .buy {
      width: 100px;
      background: rgba(255, 255, 255, 1);
      border-radius: 2px;
      border: 1px solid rgba(238, 80, 31, 1);
    }
  }
  .filter-wrap {
    position: fixed;
    right: 10px;
    bottom: 36px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    color: #999;
    div {
      padding: 15px 30px;
      border-bottom: 1px solid #f2f2f2;
      cursor: pointer;
      &:hover {
        color: #fff;
        background: rgba(238, 80, 31, 1);
      }
    }
    .active {
      color: #fff;
      background: rgba(238, 80, 31, 1);
    }
  }
}
</style>  