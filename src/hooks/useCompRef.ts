// import { ref } from "vue";

export const useComRef = <T extends abstract new (...args: any) => any>() => {
  return ref<InstanceType<T>>();
};
// function useComRef<T extends abstract new (...args: any) => any>() {
//   return ref<InstanceType<T>>();
// }
