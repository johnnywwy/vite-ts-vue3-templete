import { get } from "@/http/request";


export interface IProject {
  userId: number; // 项目
  id: number; // 项目id
  title: string; // 项目标题
  introduce: string; // 项目介绍
}

export const getProjectList = async (data?) => {
  return get({}, "/projects", data);
};
