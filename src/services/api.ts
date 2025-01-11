import {Card, CardResponse} from '@models';
import axiosInstance from './instance';

const api = {
  getAllCards: async ({pageParam}: {pageParam: number}) =>
    (
      await axiosInstance.get<CardResponse>(
        `cards?pageSize=10&page=${pageParam}`,
      )
    ).data,

  getCardDetail: async (id: string) =>
    (await axiosInstance.get<Card>(`cards/${id}`)).data,
};
export {api};
