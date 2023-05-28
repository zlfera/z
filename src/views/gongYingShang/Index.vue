<template>
    <div>
        <p>这是供应商页面</p>
        <SearchAdd />
        <MyForm />
        <MyTable />
    </div>
</template>
  
<script lang="ts" setup>
import type { Isupplier } from "@/interface/Isupplier";
import { provide, ref, type Ref } from "vue";
const dialogFormVisible: Ref<boolean> = ref<boolean>(false);
provide<Ref<boolean>>("dialogFormVisible", dialogFormVisible);
provide<Isupplier>("dynamicColumns", {
    supplierId: "供应商编号",
    supplierName: "供应商名称",
    supplierClassification: "供应商分类",
    phone: '电话',
    supplierStatus: '供应商状态',
    level: '供应商等级',
    remarks: '备注',
    address: '地址',


})
provide("tableData", [
    {
        supplierId: "2016-05-03",
        supplierName: "Tom",
        address: "No. 189, Grove St, Los Angeleshjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
        supplierId: "2016-05-03",
        supplierName: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        supplierId: "2016-05-03",
        supplierName: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        supplierId: "2016-05-03",
        supplierName: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        supplierId: "2016-05-03",
        supplierName: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        supplierId: "2016-05-03",
        supplierName: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        supplierId: "2016-05-03",
        supplierName: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
]);
</script>
  
<style scoped></style>
  