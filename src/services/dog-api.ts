import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface DogApiResponse {
  message: string;
  status: string;
}

export const REDUCER_PATH_DOG_API = 'dogApi';

export const dogApi = createApi({
  reducerPath: REDUCER_PATH_DOG_API,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api/' }),
  endpoints: (builder) => ({
    getRandomDogImgUrl: builder.query<string, void | null>({
      query: () => 'breeds/image/random',
      transformResponse: (response: DogApiResponse, meta) => {
        // eslint-disable-next-line no-console
        console.log(meta);
        return response.message;
      },
    }),
  }),
});

export const { useGetRandomDogImgUrlQuery } = dogApi;
export const { useQuerySubscription } = dogApi.endpoints.getRandomDogImgUrl;
