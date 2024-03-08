import http from "@/api/index";
import { Auth } from "@/api/interface";

// 登录
export function loginApi(params?: Auth.LoginParams) {
  return http.post<Auth.Login>("/login", params);
}

// 企业微信登录
export function loginWeWorkApi(params: any) {
  return http.post("/login/wework", params);
}

// 退出登录
export function logoutApi() {
  return http.post<Auth.Login>("/logout");
}

// type Base = {
//   id: number;
//   creator_id: number;
//   created_at: string | 0;
//   updated_at: string | 0;
//   deleted_at: string | 0;
// };
//
// type UserInfo = Base & {
//   username: string;
//   mobile: string;
//   fullname: string;
//   password: string;
//   email: string;
//   avatar: string;
// };
