/**
 * System Module API
 */
import http from "@/api/index";

// 上传图片
export function upLoadImageApi(data: any) {
  return http.post<string>("/upload/image", data);
}
