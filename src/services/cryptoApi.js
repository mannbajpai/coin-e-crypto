import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST
    
};

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl
     }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count)=>({
                url:`/coins?limit=${count}`,
                headers:cryptoApiHeaders
            }), 
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => ({
                url : `/coin/${coinId}`,
                headers:cryptoApiHeaders
            })
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => ({
                url:`/coin/${coinId}/history?timePeriod=${timePeriod}`,
                headers:cryptoApiHeaders
            }),
          }),

    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;

