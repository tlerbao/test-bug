/**
 * @description 判断是否是企业微信
 * @returns {boolean}
 */
export function isWeWork(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes("wxwork") || userAgent.includes("micromessenger");
}

/**
 * @description 获取企业微信扫码登录地址
 * @returns {string}
 */
export function getOAuthUrl(): string {
  return import.meta.env.VITE_BASE_API + "/login/oauth";
}

/**
 * @description 格式化友好时间
 * @param timeString
 */
export function formatFriendlyTime(timeString: string): string {
  const currentTime = new Date();
  const targetTime = new Date(timeString);

  const timeDiff = currentTime.getTime() - targetTime.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}天前`;
  } else if (hours > 0) {
    return `${hours}小时前`;
  } else if (minutes > 0) {
    return `${minutes}分钟前`;
  } else {
    return `${seconds}秒前`;
  }
}

export function formatTime(timeString: string, format: string): string {
  const targetTime = new Date(timeString);

  const year = targetTime.getFullYear();
  const month = (targetTime.getMonth() + 1).toString().padStart(2, "0");
  const day = targetTime.getDate().toString().padStart(2, "0");

  const hour = targetTime.getHours().toString().padStart(2, "0");
  const minute = targetTime.getMinutes().toString().padStart(2, "0");
  const second = targetTime.getSeconds().toString().padStart(2, "0");

  const formattedTime = format
    .replace("Y", year.toString())
    .replace("m", month)
    .replace("d", day)
    .replace("H", hour)
    .replace("i", minute)
    .replace("s", second);

  return formattedTime;
}
