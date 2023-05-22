<template>
  <el-table :data="tableData" height="100%" style="width: 100%" stripe>
    <el-table-column
      v-for="(value, key) in dynamicColumns"
      :label="value"
      :prop="key"
    >
      <template #default="scope">
        {{ scope.row[key] }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { inject } from "vue";
const dynamicColumns = inject("dynamicColumns");
const tableData = inject("tableData");
</script>

<style scoped></style>
