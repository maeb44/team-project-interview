import { getPaginationLastPage } from './getPaginationLastPage';

export const getPrevPage = (page: number, limit: number, itemsCount: number): number => {
  const lastPage = getPaginationLastPage(limit, itemsCount);

  if (page <= 1) {
    return 1;
  }

  if (page > lastPage) {
    return lastPage;
  }

  return page - 1;
};
