// ? 全局默认配置项

// 首页地址（默认）
export const HOME_URL: string = "/";

// 登录页地址（默认）
export const LOGIN_URL: string = "/login";

// 默认主题颜色
export const DEFAULT_PRIMARY: string = "#1677ff";

// 路由白名单地址（必须是本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ["/500", "/register", "/login/authRedirect"];

// 默认图片上传地址（提供给FormCreate上传组件使用)
export const DEFAULT_UPLOAD_URL: string = "/api/upload/image";

// 默认附件上传地址
export const DEFAULT_UPLOAD_FILE_URL: string = "/api/upload/file";

// 高德地图 key
export const AMAP_MAP_KEY: string = "";

// 百度地图 key
export const BAIDU_MAP_KEY: string = "";

export const WEWORK = {
  appid: "wwe0bf92305a653ba5",
  agentid: "1000002"
};
