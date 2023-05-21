<template>
  <div>
    <p>这是生产页面</p>
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
  date: "日期",
  name: "姓名",
  address: "地址",
  z: "z",
});
provide("tableData", [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tomd",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tomdd",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tomfds",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-08",
    name: "Tomdfd",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-06",
    name: "Tomwrfd",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-07",
    name: "Tomdfdd",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
</script>

<style scoped></style>

