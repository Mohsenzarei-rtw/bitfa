import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface Config {
  path?: string;
  baseURL?: string;
}

abstract class http {
  protected httpService: AxiosInstance;
  protected constructor({ baseURL, path }: Config) {
    this.httpService = axios.create({
      baseURL: `${baseURL}${path ? path : ''}`,
      timeout: 60000,
      validateStatus(status) {
        return status >= 200 && status < 300;
      },
    });

    this.responseInterceptors();
  }

  private responseInterceptors() {
    this.httpService.interceptors.response.use((response) => response.data);
  }
}

export default http;
