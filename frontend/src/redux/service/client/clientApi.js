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
    deleteClient: builder.mutation({
      query: (body) => ({
        url: `client`,
        method: "DELETE",
        body: body,
      }),
    }),
    updateClient: builder.mutation({
      query: (body) => ({
        url: `client`,
        method: "PATCH",
        body: body,
      }),
    }),
    getClientById: builder.query({
      query: (id) => ({
        url: `client/${id}`,
        method: "GET",
      }),
    }),
    clientByStatus: builder.query({
      query: () => ({
        url: "client/status",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useClientQuery,
  useAddClientMutation,
  useDeleteClientMutation,
  useUpdateClientMutation,
  useGetClientByIdQuery,
  useClientByStatusQuery,
} = clientApi;
