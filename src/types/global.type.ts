import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    success: boolean;
    message: string;
    stack: string;
  };
  status: number;
};

type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  success: boolean;
  data: T;
  error?: TError;
  message?: string;
  meta?: TMeta;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
