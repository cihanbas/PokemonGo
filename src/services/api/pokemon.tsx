import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../baseQuery';
import {CardResponse} from '@models';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getAllCards: builder.query<CardResponse[], void>({
      query: () => 'cards',
    }),
  }),
});

export const {useGetAllCardsQuery} = pokemonApi;
