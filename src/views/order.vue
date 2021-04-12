<template>
  <div class="container">
    <div style="height: 20px;"></div>
    <div class="top">
      <el-row>
        <el-col :span="12">
          <div class="search">
            <el-input v-model="seaVal" class="input-with-select inpw400px">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <!-- <el-input v-model="input" placeholder=""></el-input>
            <el-button type="primary" class="search-btn">Search</el-button> -->
          </div>
        </el-col>
        <el-col :span="12">
          <div class="btns">
            <a class="daochu-btn" href="http://10.47.49.234:8080/brand/down/downloadWhpModel">Export</a>
            <!-- <el-button type="primary" @click="daochu">导出</el-button> -->
          </div>
        </el-col>
      </el-row>
    </div>
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%; margin-top: 20px;"
    @row-click="toDetail"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="Order"
      prop="order"
      width="150">
    </el-table-column>
    <el-table-column
      label="Date"
      width="150">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="customer"
      label="Customer"
      width="150">
    </el-table-column>
    <el-table-column
      label="Payment"
      prop="payment"
      width="150">
    </el-table-column>
    <el-table-column
      label="Fulfillment"
      prop="fulfillment"
      width="150">
    </el-table-column>
    <el-table-column
      label="Total"
      prop="total"
      show-overflow-tooltip>
    </el-table-column>
    <!-- <el-table-column
      prop="customer"
      label="Customer"
      show-overflow-tooltip> -->
    <!-- </el-table-column> -->
  </el-table>
  <!-- <el-pagination
    style="margin-top: 20px"
    background
    layout="prev, pager, next"
    :total="1000">
  </el-pagination> -->
  <!-- <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div> -->
  </div>
</template>

<script>
  export default {
  	name:'order',

	  data :() =>({
      input: '',
      tableData: [{
          order: 'CJ2223',
          date: '2016-05-03',
          customer: 'Tom',
          payment: 'Paid',
          fulfillment: 'Fulfilled',
          total: '$59.98'
          // address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
    }),

	  components: {},

	  mounted() {

	  },

	  created() {

	  },

	  methods:{
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      toDetail () {
        this.$router.push({ path:'/goods-linkage/order-detail'})
      },
      // daochu () {
      //   window.open('http://10.47.49.234:8080/brand/down/downloadWhpModel')
      // }
	  }

  }
</script>

<style scoped lang="less">
  .search-btn {
    background: rgba(238, 80, 31, 1);
    border-color: rgba(238, 80, 31, 1);
  }
  .search-btn:hover {
    background: rgba(238, 80, 31, 0.8);
  }
  .top {
    .el-input {
      width: 360px;
    }
    .btns {
      a {
        float: right;
      }
      .daochu-btn {
        border-radius: 2px;
        border: 1px solid rgba(238, 80, 31, 1);
        margin: 0 auto;
        font-size: 16px;
        font-weight: 400;
        color: rgba(238, 80, 31, 1);
        line-height: 40px;
        padding: 0 10px;
        text-decoration: none;
      }
      .daochu-btn:hover {
        background: rgba(238, 80, 31, 0.1);
      }
    }
  }
</style>
