import {api} from '@services';
import {useInfiniteQuery} from '@tanstack/react-query';

export const useCards = () =>
  useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: api.getAllCards,
    initialPageParam: 1,
    getNextPageParam: ({page, totalCount}) =>
      page < totalCount ? page + 1 : undefined,
    select: ({pages}) => ({data: pages.flatMap(page => page.data)}),
  });
