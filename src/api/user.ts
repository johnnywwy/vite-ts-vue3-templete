import { post, get } from "@/http/request";

export type LoginRequest = {
  username: string;
  password: string;
};
// 刷新登录信息需要的参数
export type reLoginRequest = {
  accessToken: string;
};
export type LoginResponse = {
  username: string;
  roles: string[];
  accessToken: string;
};

// 角色接口
export interface IRole {
  role: number; // 角色id
  roleName: string; // 角色名称
}

// 有权限的角色接口
export interface IRoleWithAuth {
  roleId: number;
  roleName: string;
  authority: [];
}

// 用户接口
export interface IUser {
  id: number;
  userName: string;
  nickName: string;
  role: IRole[];
}

// 用户查询接口
export interface IQueryUser {
  nickName: string; // 用户别名
  role: number; // 角色编号
}

// 用户编辑接口
export interface IUserEdit {
  id: number; // 用户id
  nickName: string; // 用户昵称
  role: number[]; // 用户角色
  userName: string; // 用户名
}

// 定义的接口
export const userLogin = async (data?: LoginRequest) => {
  return post<LoginResponse>({}, "/login", data);
};

export const refreshUserInfo = async (data?: reLoginRequest) => {
  return post<LoginResponse>({}, "/getUserInfo", data);
};

// 获取所有用户角色
export const getUserList = () => {
  return get({}, "/getUserList");
};
