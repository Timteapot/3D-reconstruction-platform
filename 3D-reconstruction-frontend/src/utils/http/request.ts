import http from "./http";

interface T {
  code: number;
  message: string;
  data: unknown;
}

// 二次封装get和post请求
export function get(url: string, params?: unknown): Promise<T> {
  return http.get(url, { params }); // 注意这里的params参数写法是{ params: params } 也就是对象的简写形式
}

export function post(url: string, data?: unknown): Promise<T> {
  return http.post(url, data);
}