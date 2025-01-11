import {api} from '@services';
import {useQuery} from '@tanstack/react-query';

const usePokemonCardDetail = (id: string) => {
  const {
    data: fetchData,
    isFetching,
    error,
    isError,
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => api.getCardDetail(id),
    select: ({data}) => ({...data}),
  });

  return {fetchData, isFetching, error, isError};
};

export {usePokemonCardDetail};
