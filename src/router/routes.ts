import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/default.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: () => import("@/views/index.vue"),
        meta: {
          title: "主页"
        }
      }
    ]
  }
];

export default routes;
