import { queryOptions } from '@tanstack/react-query';
import { restuarantKeys } from './queryKeys';
import { fetchRestaurantLogos } from '@modules/blog/queries/restuarant/getRestuarantLogos';

export const restuarantQueries = {
    restuarantLogos: () => queryOptions({
      queryKey: restuarantKeys.all,
      queryFn: fetchRestaurantLogos,
      staleTime: 1000 * 60 * 5,
    }),
  };