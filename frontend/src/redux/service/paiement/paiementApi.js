import { ApiSlice } from "../../api/apiSlice";
export const paiementApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    paiement: builder.query({
      query: () => ({
        url: "paiement",
        method: "GET",
      }),
    }),
    addPaiement: builder.mutation({
      query: (body) => ({
        url: "paiement",
        method: "POST",
        body: body,
      }),
    }),
    deletePaiement: builder.mutation({
      query: (body) => ({
        url: `paiement`,
        method: "DELETE",
        body: body,
      }),
    }),
    updatePaiment: builder.mutation({
      query: (body) => ({
        url: `paiement`,
        method: "PATCH",
        body: body,
      }),
    }),
    getPaiementById: builder.query({
      query: (id) => ({
        url: `paiement/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePaiementQuery,
  useAddPaiementMutation,
  useDeletePaiementMutation,
  useUpdatePaimentMutation,
  useGetPaiementByIdQuery,
} = paiementApi;
