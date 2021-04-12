<template>
  <div>
    <div @back="goBack" class="back"><a href="#/goods-linkage/order"><span class="iconfont">&#xe62d;</span>Back</a></div>
    <div class="top">
      <span class="order-num">CJ88888</span>
      <span class="order-time">2016-05-03</span>
      <span class="paid">Paid</span>
      <span class="fulfilled">Unfulfilled</span>
    </div>
    <div class="main">
      <el-row :gutter="30">
        <el-col :span="16">
          <div class="grid-content left">
            <div class="left-item pro-list">
              <div class="top-title">Unfulfilled(2)</div>
              <div class="pro-item">
                <div class="pro">
                  <img class="img" src="../assets/img/order/shangpin-demo.png" alt="">
                  <div class="info">
                    <div class="title">14pcs Lazy No Tie Elastic Silicone Shoelaces Athletic Running Sport Shoelaces Children and Adult Shoe Strings For NMD sneakers</div>
                    <div class="sku">CJYDQXHB00003</div>
                  </div>
                  <div class="price">
                    $29.99 x 1
                  </div>
                  <div class="total">
                    $29.99
                  </div>
                </div>
                <div class="package-link">
                  <span class="iconfont">&#xe644;</span>
                </div>
                <div class="package">
                  <img class="img" src="../assets/img/order/baozhuang-demo.png" alt="">
                  <div class="info">
                    <div class="title">Gift box</div>
                    <div class="sku">BZSP108047869</div>
                  </div>
                  <div class="price">
                    $29.99 x 1
                  </div>
                  <div class="total">
                    $29.99
                  </div>
                </div>
              </div>
              <div class="btns">
                <el-button class="mark-btn">Mark as fulfilled</el-button>
                <el-button type="primary" class="create-btn">Create shipping lable</el-button>
              </div>
            </div>
            <div class="left-item item-paid">
              <div class="top-title">Paid</div>
              <div class="line-item">
                <div class="left"><span>Subtotal</span><span>2 items</span></div>
                <div class="right">$59.98</div>
              </div>
              <div class="line-item">
                <div class="left">Tax</div>
                <div class="right">$0.00</div>
              </div>
              <div class="line-item">
                <div class="left">Total</div>
                <div class="right">$59.98</div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content right">
            <div class="right-item">
              <div class="top-title">Notes</div>
              <a href="javascript:void(0)" class="edit-btn">Edit</a>
              <p>No notes from customer</p>
            </div>
            <div class="right-item item-customer">
              <div class="top-title">Customer</div>
              <div class="color custom-name">Ben</div>
              <div class="color custom-order">45 Orders</div>
              <div class="custom-type">VVIP</div>
              <div class="custome-other">
                <div class="top-title">CONTACT INFORMATION</div>
                <div class="color email">123789222@qq.com</div>
                <a href="javascript:void(0)" class="edit-btn">Edit</a>
              </div>
              <div class="custome-other">
                <div class="top-title">SHIPPING ADDRESS</div>
                <div class="address">
                  Tom <br>
                  cj <br>
                  xihu <br>
                  041654 Zhejiang <br>
                  China <br>
                  1822227777
                </div>
                <a href="javascript:void(0)" class="edit-btn">Edit</a>
                <a href="javascript:void(0)" class="iconfont copy-btn">&#xe601;</a>
              </div>
              <div class="custome-other">
                <div class="top-title">BILLING ADDRESS</div>
                <div class="address">
                  Same as shipping address
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
  	name:'order-detail',

	  data :() =>({

    }),

	  components: {},

	  mounted() {

	  },

	  created() {

	  },

	  methods:{
      goBack() {
        console.log('go back');
      }
	  }

  }
</script>

<style scoped lang="less">
  .back {
    height: 50px;
    line-height: 50px;
    a {
      text-decoration: none;
      color: #333;
    }
    a:hover {
      color:rgba(238, 80, 31, 1);
    }
    span {
      margin-right: 10px;
    }
  }
  .top {
    .order-num {
      font-size: 20px;
      font-weight: 600;
    }
    span {
      margin-right: 10px;
    }
    .paid {
      background: #ddd;
      border-radius: 10px;
      padding: 0 10px;
    }
    .fulfilled {
      background: rgba(238, 80, 31, 0.15);
      border-radius: 10px;
      padding: 0 10px;
    }
  }
  .left-item, .right-item {
    background: #f8f8f8;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    position: relative;
    >.top-title {
      font-size: 18px;
      font-weight: 600;
    }
    .edit-btn {
      color: rgba(238, 80, 31, 1);
      text-decoration: none;
      position: absolute;
      right: 30px;
      top: 25px;
    }
    .color {
      color: rgba(238, 80, 31, 1);
    }
  }
  .item-customer {
    .custome-other {
      border-top: 1px solid #eee;
      position: relative;
      padding: 10px 0;
      margin-top: 10px;
      .top-title {
        font-size: 14px;
        font-weight: 600;
        margin: 5px 0;
      }
      .edit-btn {
        right: 30px;
        top: 15px;
      }
      .copy-btn {
        color: #333;
        text-decoration: none;
        position: absolute;
        right: 30px;
        top: 40px;
        font-size: 12px;
      }
    }
  }
  .item-paid {
    .line-item {
      height: 40px;
      line-height: 40px;
    }
    .line-item:last-child {
      font-weight: 600;
    }
    .left {
      float: left;
      span {
        margin-right: 10px;
      }
    }
    .right {
      float: right;
    }
  }
  .pro-list {
    .btns {
      text-align: right;
      .create-btn {
        background: rgba(238, 80, 31, 1);
        border-color: rgba(238, 80, 31, 1);
      }
      .create-btn:hover {
        background: rgba(238, 80, 31, 0.8);
      }
      .mark-btn:hover {
        background: rgba(238, 80, 31, 0.1);
        border: 1px solid rgba(238, 80, 31, 0.5);
        color: rgba(238, 80, 31, 0.8);
      }
    }
   
  }
  .pro-item {
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  .pro, .package {
    display: flex;
    align-items: center;
    .img {
      width: 80px;
      height: 80px;
      margin: 0 10px;
      background: #ddd;
    }
    .info {
      flex: 1;
    }
    .price {
      width: 150px;
      text-align: center;
    }
    .total {
      width: 150px;
      text-align: center;
    }
    .title {
      color: rgba(238, 80, 31, 1);
    }
  }
  .package-link {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
</style>
