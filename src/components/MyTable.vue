<template>
  <el-table :data="tableData" style="width: 100%" height="100%" stripe>

    <el-table-column v-for="(value, key) in dynamicColumns" :label="value" :prop="key">
      <template #default="scope">
        {{ scope.row[key] }}
      </template>
    </el-table-column>


    <el-table-column width="250">
      <el-button type="primary">编辑</el-button>
      <el-button type="success">打印</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column>

  </el-table>
</template>

<script lang="ts" setup>
import type { Isupplier } from "@/interface/Isupplier";
import { inject } from "vue";
const dynamicColumns = inject("dynamicColumns") as Isupplier;
const tableData = inject("tableData");
</script>

<style scoped></style>
