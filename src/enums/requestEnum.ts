/**
 * @description: ContentType
 */
export enum ContentTypeEnum {
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data upload
  FORM_DATA = "multipart/form-data;charset=UTF-8",
  // json
  JSON = "application/json;charset=UTF-8"
}

/**
 * @description: 与后端协定的状态 code
 */
export enum ResultEnum {
  SUCCESS = 10000, // 成功
  LOST_LOGIN = 10001, // 登录失效
  VALIDATE_FAILED = 10002, // 验证错误
  PERMISSION_FORBIDDEN = 10003, // 权限禁止
  LOGIN_FAILED = 10004, // 登录失败
  FAILED = 10005, // 操作失败
  LOGIN_EXPIRED = 10006, // 登录失效(Token过期)
  LOGIN_BLACKLIST = 10007, // 黑名单
  USER_FORBIDDEN = 10008, // 账户被禁
  WEWORK_UNBOUND = 10009, // 未绑定企业微信
  TYPE = "success"
}
