import apiSlice from "../apiSlice";

const API_URL = "/semai";

export const semaiApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => ({
        url: `${API_URL}/sites`,
        method: "GET",
      }),
    }),
    getSites: builder.query({
      query: (data) => ({
        url: `${API_URL}/sites`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSitesQuery } = semaiApiSlice;
