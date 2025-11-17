import http from "./http";
interface T {
  code: number;
  message: string;
  data: any;
}

// 二次封装get和post请求
export function get(url: string, params?: any): Promise<T> {
  return http.get(url, { params }); 
}

export function post(url: string, data?: any): Promise<T> {
  return http.post(url, data);
}