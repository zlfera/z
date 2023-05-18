<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <LayoutHeader />
            </el-header>
            <el-main>
                <RouterView />
            </el-main>
            <el-footer>
                <LayoutFooter />
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<style  >
html,
body,
#app,
.common-layout,
.el-container {
    height: 100%;
}
</style>