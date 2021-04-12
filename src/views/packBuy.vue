<template>
  <div class="pack-buy-container">
    <el-row>
      <el-col class="return">
        <router-link to="/home">&lt;Return</router-link>
      </el-col>
      <el-col class="wrap">
        <el-row class="row-wrap">

          <img
            src="../assets/brand-placeholder1.jpg"
            alt=""
          >

          <div class="item-wrap">
            <div style="font-size: 20px; font-weight: 700">Image Title</div>
            <div style="margin: 8px 0 8px 0;">SKU:4645646546464</div>
            <div style="margin: 8px 0 8px 0;">L:12cm W:466cm H:88cm</div>
            <div style="font-size: 20px; margin: 12px 0 6px 0; color: #EE501F;">Weight:200g</div>
          </div>
          <div class="item-wrap2">
            <div style="font-size: 20px; ">Price: <span style="color: #EE501F;">$10</span></div>

          </div>
          <div class="item-wrap3">

          </div>
        </el-row>
        <el-row>
          <div style="font-size: 20px; text-align: right; padding: 20px 0; ">Count: <span style="color: #EE501F;">10</span></div>
        </el-row>
        <el-row>
          <!-- <el-col style="font-size: 20px; padding: 20px 0;">
            收件地址
          </el-col> -->
          <el-col>
            <el-form>
              <!-- <el-form-item>
                <el-radio-group v-model="radio">
                  <el-radio
                    :label="3"
                    style="margin-bottom: 16px;"
                  >默认显示之前已经填写过的地址</el-radio>
                  <br>
                  <el-radio :label="6">新增地址</el-radio>
                </el-radio-group>
              </el-form-item> -->
              <el-form-item label="Address">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="Apartment,suit,etc">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="City">
                <el-input></el-input>
              </el-form-item>
              <el-form-item
                label="Country/Region"
                style="float: left; margin-right: 40px;"
              >
                <el-select
                  v-model="value"
                  placeholder="Please Select"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <div style="overflow:hidden">
                <el-form-item
                  label=""
                  style="float: left; margin-right: 40px;"
                >
                  <div>Province</div>
                  <el-select
                    v-model="value"
                    placeholder="Please Select"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item style="float: left; margin-right: 40px;">
                  <div>Postal code</div>
                  <el-select
                    style="display: block;"
                    v-model="value"
                    placeholder="Please Select"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>

              </div>
              <el-form-item>
                <div>PhoneNumber</div>
                <el-input
                  placeholder="Please Input Content"
                  v-model="input3"
                  class="input-with-select"
                >
                  <el-select
                    v-model="abc"
                    slot="prepend"
                    placeholder="Select"
                  >
                    <el-option
                      label="0731"
                      value="0731"
                    ></el-option>
                    <el-option
                      label="371"
                      value="371"
                    ></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
              <el-form-item label="Shipping Methods">
                <el-select
                  v-model="value2"
                  placeholder="Please Select"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row style="padding: 20px 0; border-top: 1px solid #d9d9d9; border-bottom: 1px solid #d9d9d9; text-align: right">
          <el-col style="font-size: 20px; margin-bottom: 12px;">Shipping Price: <span style="color: #EE501F; ">10</span> $</el-col>
          <el-col style="font-size: 20px;">Amount: <span style="color: #EE501F;">110</span> $</el-col>
        </el-row>
        <el-row>
          <el-col style="padding: 20px 0; text-align: right">
            <el-button
              @click="$router.go(-1)"
              type="default"
              class="pay"
            >Cancel</el-button>
            <el-button
              type="default"
              class="pay"
            >Pay</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 3,
      abc: "0731",
      input3: "",
      value2: "ems",
      options: [
        {
          value: "China",
          label: "China"
        },
        {
          value: "American",
          label: "American"
        }
      ],
      options2: [
        {
          value: "ems",
          label: "ems"
        },
        {
          value: "zto",
          label: "zto"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.pack-buy-container {
  padding: 0 20px;
  background: #fff;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  .wrap {
    img {
      margin-right: 20px;
      width: 144px;
      height: 144px;
      border-radius: 8px;
      float: left;
    }
  }
  .row-wrap {
    padding: 25px 0;
    border-bottom: 1px solid #d9d9d9;
  }
  .item-wrap {
    margin-right: 140px;
    float: left;
  }
  .item-wrap2 {
    margin-right: 140px;
    float: left;
  }
  .item-wrap3 {
    float: left;
  }
}
.return {
  padding: 16px 0;
  border-bottom: 1px solid #d9d9d9;
  font-size: 20px;
  color: #000;
  a {
    text-decoration: none;
  }
}
</style>