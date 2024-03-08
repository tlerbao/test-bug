import { createRouter, createWebHashHistory, type RouteLocationNormalized } from "vue-router";
import routes from "./routes";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import NProgress from "@/utils/progress";

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
  };
}

router.beforeEach((to: toRouteType, from, next) => {
  NProgress.start();
  // 路由缓存
  useCachedViewStoreHook().addCachedView(to);
  // 页面 title
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
