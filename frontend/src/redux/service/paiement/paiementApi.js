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
  }),
});

export const { usePaiementQuery, useAddPaiementMutation } = paiementApi;
