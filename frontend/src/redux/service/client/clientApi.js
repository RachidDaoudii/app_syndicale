import { ApiSlice } from "../../api/apiSlice";
export const clientApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    client: builder.query({
      query: () => ({
        url: "client",
        method: "GET",
      }),
    }),
    addClient: builder.mutation({
      query: (body) => ({
        url: "client",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useClientQuery, useAddClientMutation } = clientApi;
