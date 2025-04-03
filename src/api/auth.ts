import { get } from '@/http/request';


export interface IAuth {
  name: string; // 权限名称
  roleId: number; // 角色ID
  roleList?: IAuth[]; // 角色列表 子权限
}

// 角色列表接口
export const getAuthList = async () => {
  return get({}, '/getAuthList');
};