<template>
  <div>
    <el-input v-model="input" placeholder="请输入搜索关键字" clearable />
    <el-row class="mb-4">
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="success" @click="dialogFormVisible = !dialogFormVisible"
        >新增</el-button
      >
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { ref, type Ref } from "vue";
const input: Ref<string> = ref("");
const search: () => void = () => {};

const dialogFormVisible = inject("dialogFormVisible");
</script>
<style scoped>
.el-row {
  margin-left: 10px;
}

div {
  display: inline-block;
}

.el-input {
  width: 250px;
  margin-right: 10px;
}
</style>

