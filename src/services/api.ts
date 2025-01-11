import {Card, CardResponse} from '@models';
import axiosInstance from './instance';

const api = {
  getAllCards: async ({pageParam}: {pageParam: number}) =>
    axiosInstance.get<CardResponse>(`cards?pageSize=10&page=${pageParam}`),

  getCardDetail: async (id: string) => axiosInstance.get<Card>(`cards/${id}`),
};
export {api};
