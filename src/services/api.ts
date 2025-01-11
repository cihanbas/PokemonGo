import {CardResponse} from '@models';
import axiosInstance from './instance';

const api = {
  getAllCards: async ({pageParam}: {pageParam: number}) => {
    const response = (
      await axiosInstance.get<CardResponse>(
        'cards?pageSize=10&page=' + pageParam,
      )
    ).data;
    return response;
  },
  getCardDetail: async (id: string) => {
    const response = (await axiosInstance.get<CardResponse>('cards/' + id))
      .data;
    return response;
  },
};
export {api};
