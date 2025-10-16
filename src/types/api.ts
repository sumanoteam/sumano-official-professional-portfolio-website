// API related types

export interface ApiClient {
  baseURL: string;
  headers: Record<string, string>;
  timeout: number;
}

export interface ApiRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: Record<string, any>;
}

export interface EndpointConfig {
  baseURL: string;
  endpoints: {
    team: string;
    services: string;
    portfolio: string;
    contact: string;
    analytics: string;
  };
}

export interface RequestInterceptor {
  onRequest?: (config: ApiRequestConfig) => ApiRequestConfig;
  onRequestError?: (error: ApiError) => Promise<ApiError>;
}

export interface ResponseInterceptor {
  onResponse?: (response: any) => any;
  onResponseError?: (error: ApiError) => Promise<ApiError>;
}

