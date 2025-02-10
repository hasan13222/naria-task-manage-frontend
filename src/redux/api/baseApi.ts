import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://naria-task-manage-server.vercel.app",
  }),
  tagTypes: ["myProfile", "isLoggedIn", "tasks"],
  endpoints: () => ({}),
});
