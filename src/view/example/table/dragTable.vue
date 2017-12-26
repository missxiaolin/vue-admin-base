<template>
  <div class="app-container calendar-list-container">
      <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
        <el-table-column
            prop="shop_id"
            label="ID"
            width="95">
        </el-table-column>
        <el-table-column
            prop="shop_name"
            label="门店名称">
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
    getShopList() {
      this.listLoading = true;
      shopList(this.shopParams).then(response => {
        let shopData = response.data;
        if (shopData.code == ERR_OK) {
          this.list = response.data.data.item;
          this.listLoading = false;
          this.totalCount = parseInt(response.data.data.totalCount);
          document.body.scrollTop = 0;
          // 兼容
          document.documentElement.scrollTop = 0;
        } else {
          Message(shopData.message);
        }
      });
    }
  }
};
</script>

<style scoped>
.drag-handler {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.show-d {
  margin-top: 15px;
}
</style>