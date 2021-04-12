<template>
  <div class="pack-order-container container">
    <el-row>
      <el-col style="padding: 20px 0;">
        <el-form inline="true">
          <el-form-item label="Search Order: ">
            <el-input placeholder="Search the Order You Want)">
              <el-button
                slot="append"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row style="background:rgba(248,248,248,1);
border-radius:2px 2px 0px 0px;
margin-bottom: 20px;">
      <el-col
        :span="9"
        style="padding: 20px 0 20px 18px;"
      >Product</el-col>
      <el-col
        style="padding: 20px;"
        :span="2"
      >Pirce</el-col>
      <el-col
        style="padding: 20px;"
        :span="2"
      >Quantity</el-col>
      <el-col
        style="padding: 20px;"
        :span="2"
      >Amount</el-col>
      <el-col
        style="padding: 20px;"
        :span="3"
      >Status</el-col>
      <el-col
        style="padding: 20px;"
        :span="3"
      >Shipping</el-col>
      <el-col
        style="padding: 20px;"
        :span="3"
      >Operation</el-col>
    </el-row>
    <el-row style="
    height: 223px;
border-radius:2px 2px 0px 0px;
margin-bottom: 20px;border:1px solid rgba(217,217,217,1);">
      <div style="background:rgba(248,248,248,1);padding: 20px 0 20px 18px;"> <span style="margin-right:80px; display: inline-block;">2019-09-11 22:33</span> <span style="margin-right:40px; display: inline-block;">订单号：4567979642464</span>
        <router-link
          to="/home"
          style="color: #EE501F;"
        >Check Products</router-link>
      </div>
      <el-col
        :span="9"
        style="padding: 18px; border-right: 1px solid #D9D9D9"
      ><img
          style="width:144px; float: left;
height:124px; margin-right: 10px;"
          src="../assets/t4.png"
          alt=""
        >
        <div>
          <div>Our Buyer Protection covers your purchase from click .</div>
          <div style="margin: 8px 0 8px 0; color: #999;">SKU:4645646546464 .</div>
          <div>10*12*33cm；200g</div>
        </div>
      </el-col>
      <el-col
        style="padding: 20px;border-right: 1px solid #D9D9D9; height: calc(100% - 61px);"
        :span="2"
      >$2.00</el-col>
      <el-col
        style="padding: 20px;border-right: 1px solid #D9D9D9; height: calc(100% - 61px);"
        :span="2"
      >x1</el-col>
      <el-col
        style="padding: 20px;border-right: 1px solid #D9D9D9; height: calc(100% - 61px);"
        :span="2"
      >$2.00</el-col>
      <el-col
        style="padding: 20px;border-right: 1px solid #D9D9D9; height: calc(100% - 61px);"
        :span="3"
      >Dispatched</el-col>
      <el-col
        style="padding: 20px;border-right: 1px solid #D9D9D9; height: calc(100% - 61px);"
        :span="3"
      >89897989797</el-col>
      <el-col
        style="padding: 20px; text-align: center"
        :span="3"
      >
        <div class="pay">Pay</div>
        <div class="cancel">Cancel Order</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.pack-order-container {
  .pay {
    color: rgba(238, 80, 31, 1);
    border-radius: 2px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 14px;
    border: 1px solid rgba(238, 80, 31, 1);
    cursor: pointer;
  }
  .cancel {
    cursor: pointer;
  }
}
</style>