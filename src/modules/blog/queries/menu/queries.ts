import { queryOptions } from '@tanstack/react-query';
import { menuKeys } from '@modules/blog/queries/menu/queryKeys';
import { fetchMenus } from '@modules/blog/queries/menu/getMenus';

export const menuQueries = {
    restuarantLogos: () => queryOptions({
      queryKey: menuKeys.all,
      queryFn: fetchMenus,
      staleTime: 1000 * 60 * 5,
    }),
  };