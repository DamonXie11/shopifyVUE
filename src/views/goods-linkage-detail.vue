<template>
    <div class="">
        <router-link to="/goods-linkage/package">
            < Back</router-link> <el-divider>
                </el-divider>
                <div class="mar-tb20px">
                    <span class="w100-right margin-r50px">Package Connection</span>
                    <span>Product Name: </span>
                    <span class="margin-r50px">{{pramarObj.title}}</span>
                    <!-- <el-tooltip class="item margin-r50px" effect="dark" placement="bottom">
                        <p slot="{{pramarObj.title}}" class="tooltip-content">{{pramarObj.title}}</p>
                    </el-tooltip> -->
                    <span>Price：</span>
                    <span>{{pramarObj.price}} $</span>
                </div>
                <div class="mar-tb20px">
                    <span class="w100-right margin-r50px">Product Attributes</span>
                    <!-- <el-checkbox-group class="dispaly-inlineblock" v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-radio  v-for="city in cities" v-model="city" label="city">{{city}}</el-radio>
            </el-checkbox-group> -->
                    <el-radio-group class="dispaly-inlineblock" v-model="property">
                        <el-radio v-for="city in cities" @change="radioFun" :label="city">{{city}}</el-radio>
                    </el-radio-group>
                </div>
                <div class="mar-tb20px">
                    <span class="w100-right margin-r50px">Search Product</span>
                    <el-input class="dispaly-inlineblock inpw400px" v-model="seaVal" @keyup.native.enter="searchFun">
                    </el-input>
                </div>
                <div class="sp-row">
                    <div class="sp-col" v-for="item in tableData" :key="item.id" @click="checkSpFun(item)"
                        :class="{ 'active':item.id == productId }">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img :src="item.image" class="image">
                            <div style="padding: 14px;">
                                <span>{{item.title}}</span>
                            </div>
                            <div style="padding: 0 14px 14px 14px;">
                                <div style="display: flex;justify-content: space-between;">
                                    <span style="width: 80%;overflow: hidden;">{{item.sku}}</span>
                                    <span style="color: #EE1F1F;text-align: right;">${{item.price}}</span>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </div>
                <!-- <el-row class="sp-row">
            <el-col class="sp-col" gutter="20" v-for="(o, index) in 10" :key="o">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row> -->
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="pageNum" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper" :total="total" class="mar-tb20px">
                </el-pagination>
                <div class="mar-tb20px" style="text-align: right;">
                    <el-button @click="productId = ''">Cancel</el-button>
                    <el-button style="background-color:#EE1F1F;color: #fff;" @click="sureGlFun">Confirm</el-button>
                </div>
    </div>
</template>

<script>
    const cityOptions = ["Boxs", "Paper Bags", "Pricing Tags", "Small Parts", "Inserts", "Metals"];
    export default {
        name: "goods-linkage-package",
        data() {
            return {
                checkAll: false,
                checkedCities: ["纸袋"],
                cities: cityOptions,
                isIndeterminate: true,
                seaVal: '',
                currentDate: new Date(),
                property: '',
                productId: '', //我们的id
                total: 0,
                pageNum: 1,
                pageSize: 10,
                currentPage: 5,
                pramarObj: {},
                tableData: [],
                itemObj: {},
            };
        },
        mounted() {
            this.pramarObj = this.$route.query;
            console.log(this.pramarObj)

            const upJson = {
                "pageNum": this.pageNum,
                "pageSize": this.pageSize,
                // "model": {
                //     "title": this.pramarObj.title,
                //     "property": this.property
                // }
            }
            this.$store.dispatch('DetailList', upJson).then(res => {
                console.log(res)
                let resData = res.data.data;
                this.tableData = resData.list;
                this.total = resData.total;
                console.log(this.tableData)
            })
        },
        methods: {
            checkSpFun(item) {
                console.log(item)
                this.productId = item.id;
                this.itemObj = item;
            },
            sureGlFun() {

                const upJson = {
                    "shopProductId": this.pramarObj.pid,
                    "productId": this.productId,
                    "image": this.itemObj.image,
                    "title": this.itemObj.title,
                    "sku": this.itemObj.sku,
                    "texture": this.itemObj.property,
                    "price": this.itemObj.price,
                    "chang": this.itemObj.chang,
                    "kuan": this.itemObj.kuan,
                    "gao": this.itemObj.gao,
                }
                this.$store.dispatch('AddGlFun', upJson).then(res => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$message({
                            message: '关联成功',
                            type: 'success'
                        });
                        this.$router.push({
                            path: "/goods-linkage-detail"
                        });
                    } else {
                        this.$message({
                            message: '关联失败',
                            type: 'warning'
                        });
                    }
                })
            },
            radioFun() {
                const upJson = {
                    "pageNum": this.pageNum,
                    "pageSize": this.pageSize,
                    "model": {
                        "title": this.seaVal,
                        "property": this.property
                    }
                }
                this.$store.dispatch('DetailList', upJson).then(res => {
                    console.log(res)
                    let resData = res.data.data;
                    this.tableData = resData.list;
                    this.total = resData.total;
                    console.log(this.total)
                })
            },
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate =
                    checkedCount > 0 && checkedCount < this.cities.length;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageNumf = val;
                this.getListFun()
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.pageSize = val;
                this.getListFun()
            },
            searchFun() {
                this.getListFun();
                console.log('4359856')
            },
            getListFun() {
                const upJson = {
                    "pageNum": this.pageNum,
                    "pageSize": this.pageSize,
                    "model": {
                        "title": this.seaVal || undefined,
                        "property": this.property || undefined
                    }
                }
                this.$store.dispatch('DetailList', upJson).then(res => {
                    console.log(res)
                    let resData = res.data.data;
                    this.tableData = resData.list;
                    this.total = resData.total;
                    console.log(this.tableData)
                })
            }
        }
    };
</script>
<style lang="less" scope>
    .mar-tb20px {
        margin: 20px 0;
    }

    .w100-right {
        width: 135px;
        display: inline-block;
        text-align: right;
    }

    .margin-r50px {
        margin-right: 50px;
    }

    .dispaly-inlineblock {
        display: inline-block !important;
    }

    .inpw400px {
        width: 400px;
    }

    .over-hide {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sp-row {
        .sp-col {
            display: inline-block;
            width: 18%;
            margin: 20px 1% 0;
            margin-top: 20px;
            cursor: pointer;
        }

        .active {
            border: 1px solid #EE1F1F;
            box-sizing: border-box;
        }

        .time {
            font-size: 13px;
            color: #999;
        }

        .bottom {
            margin-top: 13px;
            line-height: 12px;
        }

        .button {
            padding: 0;
            float: right;
        }

        .image {
            width: 100%;
            display: block;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }

        .clearfix:after {
            clear: both
        }
    }
</style>