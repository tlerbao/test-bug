import { defineStore } from "pinia";
import { UserState } from "@/store/interface";
import piniaPersistConfig from "@/config/piniaPersist";
import { loginWeWorkApi } from "@/api/modules/auth";
import { getOAuthUrl } from "@/utils";

export const useUserStore = defineStore({
  id: "andy-user",
  state: (): UserState => ({
    token: "",
    userInfo: {}
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },
    // 企业微信登录
    async loginWeWork() {
      const workCode = new URLSearchParams(window.location.search).get("code");
      if (!workCode) {
        window.location.replace(getOAuthUrl());
        return false;
      } else {
        try {
          const { data }: any = await loginWeWorkApi({ code: workCode });
          this.setToken(data.token);
          this.setUserInfo(data.user);
          // 防止继续携带 code 参数
          // window.location.replace("/");
          return true;
        } catch (error) {
          return false;
        }
      }
    }
  },
  persist: piniaPersistConfig("andy-user")
});
