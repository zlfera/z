<template>
  <el-table :data="tableData" height="100%" style="width: 100%" stripe>
    <el-table-column v-for="(value, key) in dynamicColumns" :label="value" :prop="key">
      <template #default="scope">
        {{ scope.row[key] }}

      </template>
    </el-table-column>
    <el-table-column class="mybutton">
      <el-button type="primary">编辑</el-button>
      <el-button type="success">打印</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column>

  </el-table>
</template>

<script lang="ts" setup>
import { inject } from "vue";
const dynamicColumns = inject("dynamicColumns");
const tableData = inject("tableData");
</script>

<style scoped>
.mybutton {
  display: inline-flex;
}
</style>
