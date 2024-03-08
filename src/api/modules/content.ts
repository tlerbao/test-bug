import http from "@/api";

// 帮助列表
export const getHelpListApi = (params?: API.Content.HelpSearchParams) => {
  return http.get<API.Content.HelpList>("/help", params);
};

// 新增帮助
export const addHelpApi = (params: any) => {
  return http.post("/help", params);
};

// 编辑帮助
export const editHelpApi = (params: any) => {
  return http.put("/help/" + params.id, params);
};

// 删除帮助
export const deleteHelpApi = (params: any) => {
  return http.delete("/help/" + params.id);
};

// 帮助分类
export const getHelpCategoryApi = (params?: any) => {
  return http.get<API.Content.HelpCategory[]>("/help/category", params);
};

// 新增帮助分类
export const addHelpCategoryApi = (params: any) => {
  return http.post<string>("/help/category", params);
};

// 编辑帮助分类
export const editHelpCategoryApi = (params: any) => {
  return http.put<boolean>("/help/category/" + params.id, params);
};

// 删除帮助分类
export const deleteHelpCategoryApi = (params: any) => {
  return http.delete<boolean>("/help/category/" + params.id);
};

// 更新日志列表
export const getChangeLogListApi = (params?: any) => {
  return http.get<API.Content.ChangeLogList>("/changeLog", params);
};

// 新增反馈信息
export const addFeedbackApi = (params: any) => {
  return http.post("/feedback", params);
};
