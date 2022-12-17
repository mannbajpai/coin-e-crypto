import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangeApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_EXCHANGE_RAPIDAPI_HOST,
};

const baseUrl = process.env.REACT_APP_CRYPTO_EXCHANGE_API_URL;

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: ( ) => ({
        url: `/exchanges`,
        headers: cryptoExchangeApiHeaders,
      }),
    }),
  }),
});

export const { useGetCryptoExchangeQuery } = cryptoExchangeApi;
