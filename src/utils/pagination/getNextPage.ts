import { getPaginationLastPage } from './getPaginationLastPage';

export const getNextPage = (page: number, limit: number, itemsCount: number): number => {
  const lastPage = getPaginationLastPage(limit, itemsCount);

  if (page <= 0) {
    return 1;
  }

  if (page > lastPage) {
    return lastPage;
  }

  return page + 1;
};
