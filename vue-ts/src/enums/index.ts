/** HTTP 状态码 */
export const HTTPStatusCode = {
  // 无效
  BadRequest: 400,
  // 未被授权的
  Unauthorized: 401,
  // 必须参数
  PaymentRequired: 402,
  // 禁用
  Forbidden: 403,
  // 未找到
  NotFound: 404
}

/** 错误信息提示 */
export const ErrorMessage = {
  [1000]: '参数错误',

  [5]: '你的 IP 已被禁止访问',

  [100000]: '用户名或密码错误，请重新输入！',
  [100001]: '该账号已被停用！',
  [100002]: '验证码错误!',
  [100003]: '没有权限!',
  [100011]: '旧密码错误，请确认后重新输入!'
}

/** 排序类型 */
export const OrderType = {
  ascending: 'asc',
  descending: 'desc'
}
