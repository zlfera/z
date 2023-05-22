<template>
  <div>
    <p>这是入库页面</p>
    <SearchAdd />
    <MyForm />
    <MyTable />
  </div>
</template>

<script lang="ts" setup>
import { provide, ref, type Ref } from "vue";
const dialogFormVisible: Ref<boolean> = ref<boolean>(false);
provide("dialogFormVisible", dialogFormVisible);
provide("dynamicColumns", {
  id: "物料编号",
  name: "物料名称",
  batch: "批次",
  year: "年",
  spec: "规格",
  unit: "单位",
  num: "数量",
  remark: "备注",
  type: "类型",
});
provide("tableData", [
  {
    id: "2016-05-03",
    name: "Tom",
    batch: "No. 189, Grove St, Los Angeles",
  },
  {
    id: "2016-05-02",
    name: "Tomd",
    baych: "No. 189, Grove St, Los Angeles",
  },
  {
    id: "2016-05-04",
    name: "Tomdd",
    batch: "No. 189, Grove St, Los Angeles",
  },
  {
    id: "2016-05-01",
    name: "Tomfds",
    batch: "No. 189, Grove St, Los Angeles",
  },
  {
    id: "2016-05-08",
    name: "Tomdfd",
    batch: "No. 189, Grove St, Los Angeles",
  },
  {
    id: "2016-05-06",
    name: "Tomwrfd",
    batch: "No. 189, Grove St, Los Angeles",
  },
  {
    id: "2016-05-07",
    name: "Tomdfdd",
    batch: "No. 189, Grove St, Los Angeles",
  },
]);
</script>

<style scoped></style>
