/**
 * Permissions Module API
 */
import http from "@/api/index";

/**
 * 品牌管理
 */

// 品牌列表
export function getBrandListApi(params?: API.Permissions.BrandSearchParams) {
  return http.get<API.Permissions.BrandList>(`/brand`, params);
}

// 个人信息
export function getUserInfoApi() {
  return http.get<any>("/user/info");
}

// 保存个人资料
export function saveUserProfileApi(data: any) {
  return http.put("/user/profile", data);
}

// 修改密码
export function changePasswordApi(data: any) {
  return http.put("/user/password", data);
}

// 我的团队
export function getTeamMemberListApi(params?: any) {
  return http.get<API.Permissions.TeamList[]>("/user/team", params);
}
