import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type PostParams =  {
    number: string;
}

export const simpleApi = createApi({
    reducerPath: "api",
    tagTypes: [
        "number"
    ],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4001/' }),
    endpoints: (builder) => ({
        getTest: builder.query<string, void>({
            providesTags: ["number"],
            query: () => 'get'
        }),
        postTest: builder.mutation<string, PostParams>({
            invalidatesTags: ['number'],
            query: ({ number }) => ({
                url: "post",
                method: "POST",
                body: { number } 
            })
        })
    }),
});

export const { useGetTestQuery, usePostTestMutation } = simpleApi;