import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/layout/Index.vue";
import Login from "../views/login/Index.vue";
import BaoBiao from "../views/baoBiao/Index.vue";
import CaiGou from "@/views/caiGou/Index.vue";
import JianYan from "@/views/jianYan/Index.vue";
import GuoBang from "@/views/guoBang/Index.vue";
import RuKu from "@/views/ruKu/Index.vue";
import ChuKu from "@/views/chuKu/Index.vue";
import ShengChan from "@/views/shengChan/Index.vue";
import DaBao from "@/views/daBao/Index.vue";
import BaoYang from "@/views/baoYang/Index.vue";
import Category from "../views/category/Index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",

      component: Layout,
      children: [
        {
          path: "",
          component: BaoBiao,
        },
        {
          path: "/category",
          component: Category,
        },
        {
          path: "/caigou",
          component: CaiGou,
        },
        {
          path: "/jianyan",
          component: JianYan,
        },
        {
          path: "/guobang",
          component: GuoBang,
        },
        {
          path: "/ruku",
          component: RuKu,
        },
        {
          path: "/chuku",
          component: ChuKu,
        },
        {
          path: "/shengchan",
          component: ShengChan,
        },
        {
          path: "/dabao",
          component: DaBao,
        },
        {
          path: "/baoyang",
          component: BaoYang,
        },
        {
          path: "/wuliao",
          component: () => import("@/views/wuLiao/Index.vue"),
        },
        {
          path: "/gongyingshang",
          component: () => import("@/views/gongYingShang/Index.vue"),
        },
        {
          path: "/kehu",
          component: () => import("@/views/keHu/Index.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
