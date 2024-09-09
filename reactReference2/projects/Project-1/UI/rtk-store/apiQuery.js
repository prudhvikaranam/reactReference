import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restrosApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.2:8080' }),
    tagTypes : ['fetchRestros'],
    endpoints: (builder) => ({
        getRestros: builder.query({
            query: () => "/getRestros",
            providesTags : ["fetchRestros"]
        }),
        addRestros: builder.mutation({
            query: (restro) => ({
                url: '/postRestro',
                headers: {
                    'custom-header': 'ptk-restros'
                },
                method: 'POST',
                body: restro
            }),
            invalidatesTags : ["fetchRestros"]
        })
    })
})

export const { useGetRestrosQuery,useAddRestrosMutation } = restrosApi;