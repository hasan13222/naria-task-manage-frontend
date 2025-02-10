import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: payload.body,
        headers: { "Authorization": `Bearer ${payload.token}` },
      }),
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),      
      invalidatesTags: ["isLoggedIn"]
    }),
    checkLogin: builder.query({
      query: () => ({
        url: "/auth/isLoggedIn",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["isLoggedIn"]
    }),
    logout: builder.mutation({
      query: (payload) => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
        body: payload
      }),
      invalidatesTags: ["isLoggedIn"]
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
        credentials: "include",
      })
    }),
    getMyProfile: builder.query({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["myProfile"]
    }),
    updateMyProfile: builder.mutation({
      query: (payload) => ({
        url: "/auth/profile",
        method: "PUT",
        credentials: "include",
        body: payload
      }),
      invalidatesTags: ["myProfile"]
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useCheckLoginQuery,
  useLogoutMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useGetMyProfileQuery,
  useUpdateMyProfileMutation
} = authApi;
