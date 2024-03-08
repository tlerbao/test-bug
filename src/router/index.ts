import { createRouter, createWebHashHistory, type RouteLocationNormalized } from "vue-router";
import NProgress from "@/utils/progress";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";
import { LOGIN_URL, ROUTER_WHITE_LIST } from "@/config";
import { useUserStore } from "@/store/modules/user";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";

const routes = setupLayouts(generatedRoutes);

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

router.beforeEach(async (to: toRouteType, from) => {
  const userStore = useUserStore();

  // 1.NProgress 开始
  NProgress.start();

  // 2.动态设置标题
  const title = import.meta.env.VITE_GLOB_APP_TITLE;
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;

  // 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页
  if (to.path.toLocaleLowerCase() === LOGIN_URL) {
    if (userStore.token) return { path: from.fullPath, replace: true };
  }

  // 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
  if (!ROUTER_WHITE_LIST.includes(to.path)) {
    // 5.判断是否有 Token，没有重定向到 login 页面
    if (!userStore.token && to.path.toLocaleLowerCase() !== LOGIN_URL) {
      // 6.企业微信自动OAuth登录
      // if (isWeWork()) {
      //   return await userStore.loginWeWork();
      // }
      return { path: LOGIN_URL, replace: true };
    }
  }
  // 7.缓存页面
  useCachedViewStoreHook().addCachedView(to);
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
