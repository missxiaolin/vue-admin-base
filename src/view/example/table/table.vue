<template>
	<div class="app-container">
    <el-button style='margin-bottom:20px;' type="primary" icon="document"
              @click="handleDownload"
              :loading="downloadLoading">导出excel</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column
        prop="shop_id"
        label="ID"
        width="95">
      </el-table-column>
      <el-table-column
        label="门店名称">
        <template slot-scope="scope">
          <el-input v-show="scope.row.edit" size="small" v-model="scope.row.shop_name"></el-input>
          <span v-show="!scope.row.edit">{{ scope.row.shop_name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="门店地址">
      </el-table-column>
      <el-table-column
        prop="business_hours"
        label="营业时间">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updated_at"
        label="修改时间">
      </el-table-column>
      <el-table-column align="center" label="编辑" width="120">
        <template slot-scope="scope">
          <el-button :type="scope.row.edit?'success':'primary'" @click='scope.row.edit=!scope.row.edit' size="small" icon="edit">{{scope.row.edit?'完成':'编辑'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="pageSizeList"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { shopList } from "api/shop";
import { ERR_OK } from "api/config";

import { Message } from "element-ui";

// 格式化数据
import { formatJson } from "common/js/excel/util";

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      currentPage4: 1,
      pageSizeList: [20, 50, 100],
      pageSize: 20,
      totalCount: 0,
      shopParams: {
        page: 1,
        per_page: 20
      }
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    // 导出excel
    handleDownload() {
      this.downloadLoading = true;
      require.ensure([], () => {
        const {
          export_json_to_excel
        } = require("common/js/excel/Export2Excel");
        const tHeader = ["门店id", "门店名称"];
        const filterVal = ["shop_id", "shop_name"];
        const list = this.list;
        const data = formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, "列表excel");
        this.downloadLoading = false;
      });
    },
    // 获取shop数据
    getShopList() {
      this.listLoading = true;
      shopList(this.shopParams).then(response => {
        let shopData = response.data;
        if (shopData.code == ERR_OK) {
          let items = response.data.data.item;
          this.list = items.map(v => {
            this.$set(v, 'edit', false)
            return v
          });
          this.listLoading = false;
          this.totalCount = parseInt(response.data.data.totalCount);
          document.body.scrollTop = 0;
          // 兼容
          document.documentElement.scrollTop = 0;
        } else {
          Message(shopData.message);
        }
      });
    },
    // 显示个数
    handleSizeChange(val) {
      this.shopParams.per_page = val;
      this.getShopList();
    },
    // 分页点击
    handleCurrentChange(val) {
      this.shopParams.page = val;
      this.getShopList();
    }
  }
};
</script>