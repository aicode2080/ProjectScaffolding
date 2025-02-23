// utils.ts
export const toQueryString = (obj: Record<string, any>, urlEncode: boolean = false): string => {
  // 辅助函数：将对象展平
  const flattenObj = (x: Record<string, any>, path: string[] = []): { path: string[]; val: any }[] => {
    const result: { path: string[]; val: any }[] = [];

    Object.keys(x).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(x, key)) {
        return;
      }

      const newPath = [...path, key];

      let vals: { path: string[]; val: any }[] = [];
      if (typeof x[key] === "object" && x[key] !== null) {
        vals = flattenObj(x[key], newPath); // 如果是对象，递归展平
      } else {
        vals.push({ path: newPath, val: x[key] });
      }

      result.push(...vals);
    });

    return result;
  };

  // 展平对象
  let parts = flattenObj(obj);

  // 处理路径的格式
  parts = parts.map((varInfo) => {
    if (varInfo.path.length === 1) {
      varInfo.path = [varInfo.path[0]]; // 保持 path 为数组类型
    } else {
      const [first, ...rest] = varInfo.path;
      varInfo.path = [`${first}[${rest.join("][")}]`]; // 保持 path 为数组类型
    }
    return varInfo;
  });

  // 生成查询字符串
  const queryString = parts
    .map((varInfo) => `${varInfo.path.join("")}=${encodeURIComponent(String(varInfo.val))}`) // 处理 URL 编码
    .join("&");

  // 根据 urlEncode 参数决定是否进行 URL 编码
  if (urlEncode) {
    return encodeURIComponent(queryString);
  } else {
    return queryString;
  }
};