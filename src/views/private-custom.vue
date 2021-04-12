<template>
  <div class="private-custom container">
  <div class="designer" 
  v-for="(item, idx) of designerList"
  :key="idx"
  >
   <el-row>
    <el-col :span="8">
      <div class="grid-content private-left">
         <div class="left-img">
           <img
            :src="item.avator"
            alt="">
         </div>
         <div class="right-info">
          <h6>{{item.name}}</h6>
          <div class="intro">{{item.address}}: {{item.zhiye}}</div>
          <div class="redu"><span>Hot ({{item.redu}})</span><span>Works ({{item.zuopinnum}})</span></div>
          <div class="btns">
            <el-button type="primary" class="guanzhu-btn">Like</el-button>
            <el-button type="primary" class="zixun-btn">Ask Question</el-button>
          </div>
         </div>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content private-right">
        <el-row :gutter="10">
          <!-- <el-col :span="8"
          v-for="(item, idx) of item.zuopins"
          :key="idx"
          ><img
          :src="item"
          alt=""></el-col> -->
          <el-col :span="8"><img :src="require('../assets/img/private-custom/zuopin'+idx+'1.png')" alt=""></el-col>
          <el-col :span="8"><img :src="require('../assets/img/private-custom/zuopin'+idx+'2.png')" alt=""></el-col>
          <el-col :span="8"><img :src="require('../assets/img/private-custom/zuopin'+idx+'3.png')" alt=""></el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
  </div>
  </div>
</template>

<script>
  export default {
  	name:'private-custom',

	  data :() =>({
      designerList: [
        {
          id: '1',
          name: 'Xiaolie Yang',
          address: 'Ji Nan',
          zhiye: 'Graphic Design',
          redu: '200',
          zuopinnum: '9',
          avator: require('../assets/img/private-custom/avator1.png'),
          zuopins: [1,2,3]
        },
        {
          id: '2',
          name: 'Bing Yan',
          address: 'HangZhou',
          zhiye: 'Industrial Desgin',
          redu: '100',
          zuopinnum: '6',
          avator: require('../assets/img/private-custom/avator2.png'),
          zuopins: [1,2,3]
        },
        {
          id: '3',
          name: 'YuanNai Zhu',
          address: 'ShangHai',
          zhiye: 'Graphic Design',
          redu: '120',
          zuopinnum: '10',
          avator: require('../assets/img/private-custom/avator3.png'),
          zuopins: [1,2,3]
        },
        {
          id: '4',
          name: 'Manon Tomos',
          address: 'California',
          zhiye: 'Freelancers',
          redu: '88',
          zuopinnum: '12',
          avator: require('../assets/img/private-custom/avator4.png'),
          zuopins: [1,2,3]
        }
      ]
    }),

	  components: {},

	  mounted() {

	  },

	  created() {

	  },

	  methods:{

	  }

  }
</script>

<style scoped lang="less">
.private-custom {
  background: #fff;
  margin: 10px auto;
  padding: 20px;
}
  .designer {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  .designer:last-child {
    border-bottom: 0;
  }
  .private-left {
    // background: #d3dce6;
    // margin-right: 50px;
    display: flex;
    .left-img {
      width: 100px;
      height: 100px;
      img {
        width: 80px;
        height: 80px;
        background: #666;
        display: block;
        border-radius: 50%;
      }
    }
    .right-info {
      flex: 1;
      h6 {
        margin: 0;
        font-size: 16px;
        padding: 5px 0;
      }
      .intro {
        color: #999;
        font-size: 12px;
      }
      .redu {
        font-size: 14px;
        span {
          margin-right: 10px;
        }
      }
      .btns {
        margin-top: 10px;
        button {
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
        }
        .guanzhu-btn, .zixun-btn {
          background: rgba(238, 80, 31, 1);
          border-color: rgba(238, 80, 31, 1);
        }
        .guanzhu-btn:hover, .zixun-btn:hover {
          background: rgba(238, 80, 31, 0.8);
        }
      }
    }
  }
  .private-right {
    // background: #e5e9f2;
    img {
      width: 100%;
      height: 150px;
      background: #666;
      display: block;
    }
  }
</style>
