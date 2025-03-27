import { defineStore } from "pinia";
import pinia from "@/store";
import { UserStore } from "./types";
import { refreshUserInfo, userLogin } from "@/api/user";

export type LoginRequest = {
  username: string;
  password: string;
};

export const useUserStoreHook = defineStore("userInfo", {
  // 其他配置...
  state: (): UserStore => ({
    username: "大伟",
    accessToken: "",
    roles: ["common"],
  }),
  getters: {},
  actions: {
    storeUserLogin(data) {
      return userLogin(data).then((res) => {
        this.username = res.username;
        this.roles = res.roles;
        this.accessToken = res.accessToken;
        return res;
      });
    },
    stroeRefreshUserInfo() {
      if (this.username == "大伟" && this.accessToken != "") {
        refreshUserInfo({
          accessToken: this.accessToken,
        })
          .then((res) => {
            this.username = res.username;
            this.roles = res.roles;
            this.accessToken = res.accessToken;
          })
          .catch(() => {
            this.accessToken = "";
          });
      }
    },
    persist: {
      key: "userInfo",
      storage: sessionStorage,
      paths: ["accessToken"],
    },
  },
});

export function useUserStore() {
  return useUserStoreHook(pinia);
}
