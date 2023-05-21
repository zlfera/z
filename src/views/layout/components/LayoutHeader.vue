<template>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">报表记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/wuliao">物料信息</RouterLink>
        </li>

        <li>
          <RouterLink to="/caigou">采购记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/jianyan">检验记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/guobang">过磅记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/ruku">入库记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/chuku">出库记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/shengchan">生产记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/dabao">打包记录</RouterLink>
        </li>
        <li>
          <RouterLink to="/baoyang">保养记录</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
nav ul li {
  display: inline-flex;
  margin-left: 20px;
}
</style>

