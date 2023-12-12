import { ApiSlice } from "../../api/apiSlice";
export const appartementApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    appartement: builder.query({
      query: () => ({
        url: "appartement",
        method: "GET",
      }),
    }),
    appartementByStatus: builder.query({
      query: () => ({
        url: "appartement/status",
        method: "GET",
      }),
    }),
    addAppartement: builder.mutation({
      query: (body) => ({
        url: "appartement",
        method: "POST",
        body: body,
      }),
    }),
    deleteAppartement: builder.mutation({
      query: (body) => ({
        url: "appartement",
        method: "DELETE",
        body: body,
      }),
    }),
    getAppartementById: builder.mutation({
      query: (id) => ({
        url: `appartement/${id}`,
        method: "GET",
      }),
    }),

    updateAppartement: builder.mutation({
      query: (body) => ({
        url: `appartement`,
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useAppartementQuery,
  useAddAppartementMutation,
  useDeleteAppartementMutation,
  useGetAppartementByIdMutation,
  useUpdateAppartementMutation,
  useAppartementByStatusQuery
} = appartementApi;
