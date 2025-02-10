import { baseApi } from "../baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (payload) => ({
        url: "/tasks",
        method: "POST",
        body: payload.body,
        headers: { Authorization: `Bearer ${payload.token}` },
      }),
      invalidatesTags: ["tasks"]
    }),
    deleteTask: builder.mutation({
      query: (payload) => ({
        url: `/tasks/${payload.id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${payload.token}` },
      }),
      invalidatesTags: ["tasks"]
    }),
    updateTask: builder.mutation({
      query: (payload) => ({
        url: `/tasks/${payload.id}`,
        method: "PUT",
        body: payload.body,
        headers: { Authorization: `Bearer ${payload.token}` },
      }),
      invalidatesTags: ["tasks"]
    }),
    getMyTask: builder.query({
      query: (payload) => ({
        url: "/tasks",
        method: "GET",
        headers: { Authorization: `Bearer ${payload.token}` },
        params: payload.params
      }),
      providesTags: ["tasks"]
    }),
  }),
});

export const { useCreateTaskMutation, useGetMyTaskQuery, useDeleteTaskMutation, useUpdateTaskMutation } = taskApi;
