import {fetchBaseQuery} from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.pokemontcg.io/v2/', // API'nin temel URL'si
  prepareHeaders: headers => {
    return headers;
  },
});

export {baseQuery};
