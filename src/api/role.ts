import { get } from '@/http/request';


export interface IRole {
  role?: number; // 角色id
  roleName: string; // 角色名称
  authority: any[];
}

// 角色列表接口
export const getRoleList = async (data?) => {
  return get({}, '/getRoleList', data);
};
