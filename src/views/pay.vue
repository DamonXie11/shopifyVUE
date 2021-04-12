<template>
    <div>
       <div class="back"><a href="/#/order"><span class="iconfont">&#xe62d;</span>Back</a></div>
       <div class="order-num">Order Number: CJ8888</div>
       <div class="order-amount">
         <div class="left">Final Amount:</div>
         <div class="right">$<span>69.8</span></div>
       </div>
       <div class="pay-method">
         <div class="title">Payment Methods</div>
         <div class="info">All transactions are secure and encrypted.</div>
         <div class="methods">
            <el-radio v-model="radio" label="1"><img src="../assets/img/pay/pay1.png" alt=""></el-radio>
            <el-radio v-model="radio" label="2"><img src="../assets/img/pay/pay2.png" alt=""></el-radio>
            <el-radio v-model="radio" label="3"><el-button type="primary">Pay With Card</el-button></el-radio>
            <el-radio v-model="radio" label="4"><img src="../assets/img/pay/pay4.png" alt=""></el-radio>
         </div>
         <div class="btns">
           <el-button type="primary" class="pay-btn">Pay</el-button>
         </div>
       </div>
       <div class="pay-method we-accept">
         <div class="title">We Accept</div>
         <div class="methods">
            <img src="../assets/img/pay/accept1.jpg" alt="">
            <img src="../assets/img/pay/accept2.png" alt="">
            <img src="../assets/img/pay/accept3.png" alt="">
            <img src="../assets/img/pay/accept4.png" alt="">
            <img src="../assets/img/pay/accept5.png" alt="">
            <img src="../assets/img/pay/accept6.png" alt="">
            <img src="../assets/img/pay/accept7.png" alt="">
            <img src="../assets/img/pay/accept8.png" alt="">
         </div>
       </div>
    </div>
</template>
<script>
export default {
  name: 'pay',
  components: {},
  data: () => ({
    title: 'pay',
    radio: '1'
  }),
  mounted() {
  },
  watch:{
      
  },
  methods:{
      
  }
}
</script>
<style scoped lang="less">
.pay-btn {
  background: rgba(238, 80, 31, 1);
  border-color: rgba(238, 80, 31, 1);
  height: 60px;
  width: 200px;
  font-size: 18px;
}
.pay-btn:hover {
  background: rgba(238, 80, 31, 0.8);
}
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
  .order-num {
    height: 50px;
    line-height: 50px;
  }
  .order-amount {
    height: 60px;
    line-height: 60px;
    background: #fffdf5;
    padding: 0 20px;
    .left {
      float: left;
      font-size: 18px;
      font-weight: 500;
    }
    .right {
      float: right;
      span {
        font-size: 24px;
      }
    }
  }
  .pay-method {
    margin-top: 50px;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    .info {
      color: #666;
    }
    .methods {
      padding: 0 20px;
      height: 150px;
      display: flex;
      align-items: center;
      background: #fffdf5;
      // justify-content: space-between;
      label {
        display: flex;
        align-items: center;
      }
      img {
        max-height: 60px;
      }
    }
    .btns {
      margin: 10px 0;
      text-align: right;
    }
  }
  .we-accept {
    margin-bottom: 20px;
    img {
      margin-right: 20px;
    }
  }
</style>