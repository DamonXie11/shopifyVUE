<template>
  <div class="container">
    <!-- <div class="mar-tb20px">
      <el-input v-model="seaVal" class="input-with-select inpw400px">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div> -->
    <div class="mar-tb20px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="Image" width="180" align="center">
          <template slot-scope="scope">
            <el-avatar shape="square" :size="60" :src="scope.row.image"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column label="Product" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Price" width="180" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.prices }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Operation" align="center">
          <template slot-scope="scope">
            <el-button v-on:click="toDetailFun(scope.row)" v-show="scope.row.associated == 0" size="mini">Connection
            </el-button>
            <el-button v-show="scope.row.associated == 1" size="mini" @click="open">
              Checking Connection
            </el-button>
            <el-button v-show="scope.row.associated == 1" size="mini" type="danger"
              @click="deleteGlFun(scope.$index, scope.row)">Remove Connection</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
      :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total"
      class="mar-tb20px">
    </el-pagination>

    <el-dialog title="Remove Connection" :visible.sync="dialogVisible" width="30%">
      <span>Are you sure to remove connection?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="sureDelFun">Confirm</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "goods-linkage-package",
    data() {
      return {
        seaVal: '',
        total: 0,
        pageNum: 1,
        pageSize: 10,
        tableData: [],
        dialogVisible: false,
        pid: '',
      };
    },
    mounted() {
      console.log('mounted')
      const upJson = {
        "pageNum": this.pageNum,
        "pageSize": this.pageSize
      }
      this.$store.dispatch('GetList', upJson).then(res => {
        console.log(res)
        let resData = res.data.data;
        this.tableData = resData.list;
        this.total = resData.total;
        console.log(this.total)
      })
    },
    methods: {
      deleteGlFun(index, row) {
        console.log(index, row);
        this.dialogVisible = true;
        this.pid = row.pid;
      },
      serchFun() {
        this.pageSize = val;
        const upJson = {
          "pageNum": this.pageNum,
          "pageSize": this.pageSize,
          "model": {
            "title": this.seaVal || undefined
          }
        }
        this.$store.dispatch('GetList', upJson).then(res => {
          let resData = res.data.data;
          this.tableData = resData.list;
          this.total = resData.total;
        })
      },
      CheckFun(){
        
      },
      sureDelFun() {
        // DelGlFun
        this.$store.dispatch('DelGlFun', {
          'shopProductId': this.pid
        }).then(res => {
          console.log(res)
          if (res.data.code == 200) {
            this.dialogVisible = false;
            this.$message({
              message: 'Remove Success',
              type: 'success'
            });
            this.handleCurrentChange(this.pageNum)
          } else {
            this.$message({
              message: 'Remove Error',
              type: 'warning'
            });
          }
        })
      },
      checkGlFun(index, row) {
        console.log(index, row);
        this.$store.dispatch('GetList', {
          username: '123'
        })
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        const upJson = {
          "pageNum": this.pageNum,
          "pageSize": this.pageSize,
        }
        this.$store.dispatch('GetList', upJson).then(res => {
          let resData = res.data.data;
          this.tableData = resData.list;
          this.total = resData.total;
        })
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageNum = val;
        const upJson = {
          "pageNum": this.pageNum,
          "pageSize": this.pageSize,
        }
        this.$store.dispatch('GetList', upJson).then(res => {
          let resData = res.data.data;
          this.tableData = resData.list;
          this.total = resData.total;
        })
      },
      toDetailFun(row) {
        console.log(row)
        this.$router.push({
          path: "/goods-linkage/goods-linkage-detail",
          query: {
            pid: row.pid,
            title: row.title,
            price: row.prices
          }
        });

      },
      open() {
        let ohtml = '<div class="detail-main"><img src="https://cdn.shopify.com/s/files/1/1676/9873/products/3501735896736.png?v=1552356217" alt=""><ul class="detail-main-list"><li class="detail-main-item"> <span class="title">SKU</span> 1323466464-blue </li> <li class="detail-main-item"> <span class="title">Title</span> 1323466464-blue </li> <li class="detail-main-item"> <span class="title">分类</span> 1323466464-blue </li> <li class="detail-main-item"> <span class="title">尺寸</span> length 1 width 1 height 1 </li> <li class="detail-main-item"> <span class="title">单位</span> $220 </li> </ul> </div>';
        this.$alert(ohtml, '', {
          dangerouslyUseHTMLString:true,
          confirmButtonText: '确定',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
      }
    }
  };
</script>
<style lang="less" scope>
  .mar-tb20px {
    margin: 20px 0;
  }

  .w100-right {
    width: 100px;
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

  .sp-row {
    .sp-col {
      display: inline-block;
      width: 18%;
      margin: 20px 1% 0;
      margin-top: 20px;
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
  .detail-main{
    display: flex;
    img{
      width:300px;
      height:262px; 
      object-fit: contain;
      border:1px dashed #f2f2f2;
    }
    &-list{
      flex: 1;
    }
    &-item{
      line-height: 25px;
      padding:10px 0;
    }
  }
  .el-message-box{
    width: auto;
  }
  

</style>