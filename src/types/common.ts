// Common types used across the application

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface ErrorState {
  message: string;
  code?: string;
  details?: Record<string, any>;
}

