import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    authSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
