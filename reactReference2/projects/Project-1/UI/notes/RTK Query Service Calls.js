
// ******************************************************* Redux RTK creating queries*****************************************************;

// Below is an expample for get request


// Steps are below
// Step 1 -> create api queries using createApi({})

// Step 2 -> Add the middleware and create api details in the store reducer

// Step 3 -> Add the ApiProvider in the root level or wherever required

// Step 4 -> Call the method in the components

// Step 5 -> 

// Step 6 ->



// 1) queryfile.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.2:8080" }),
  endpoints: (builder) => ({
    getRestros: builder.query({
      query: () => "/getRestros",
      // query : (id) => `getRestros${id}`
      providesTags: ["fetchRestros"]
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
      invalidatesTags: ["fetchRestros"]
    })
  })
});

export const {
  useGetRestrosQuery,
  useAddRestrosMutation
} = api;





// In the store we need to add the middleware and reducer path 

// 2) Store.js

const { configureStore } = require("@reduxjs/toolkit");
import { api } from "./apiQuery";

const appStore = configureStore({
  reducer: {
    //slice config's goes here
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
});

export default appStore;


// 3) In the App.js file


import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "../rtk-store/apiQuery";
<ApiProvider api={api}> Components goes here </ApiProvider>


// 4) component.js file
const { data, isError, isFetching, isLoading, isSuccess, refetch } = useGetRestrosQuery(); // For get


const [addRestros] = useAddRestrosMutation(); //  for Post
const submitRestro = () => {
  addRestros(addDataState)
};


