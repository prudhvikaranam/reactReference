import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardData = createApi({
    reducerPath: 'dashboardData',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.4:3000/' }),
    endpoints: (builder) => ({
        fetchRestaurents: builder.query({
            query: () => 'getRestaurents'
        })
    })
})

export const { useFetchRestaurentsQuery } = dashboardData;