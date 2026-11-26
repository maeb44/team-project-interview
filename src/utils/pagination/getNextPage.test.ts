import { describe, expect, it } from 'vitest';
import { getNextPage } from './getNextPage';

describe('getPaginationLastPage', () => {
  it('returns the first page as next page when current page is less than 1', () => {
    [
      { itemsCount: 10, limit: 5, page: -10, nextPage: 1 },
      { itemsCount: 10, limit: 5, page: -1, nextPage: 1 },
      { itemsCount: 10, limit: 5, page: 0, nextPage: 1 },
    ].forEach((e) => {
      expect(getNextPage(e.page, e.limit, e.itemsCount)).toEqual(e.nextPage);
    });
  });

  it('returns the next page when it exists', () => {
    [
      { itemsCount: 10, limit: 3, page: 3, nextPage: 4 },
      { itemsCount: 10, limit: 3, page: 2, nextPage: 3 },
      { itemsCount: 10, limit: 3, page: 1, nextPage: 2 },
    ].forEach((e) => {
      expect(getNextPage(e.page, e.limit, e.itemsCount)).toEqual(e.nextPage);
    });
  });

  it('returns the last page when page is at or beyond the last page', () => {
    [
      { itemsCount: 10, limit: 3, page: 10000, nextPage: 4 },
      { itemsCount: 10, limit: 3, page: 5, nextPage: 4 },
      { itemsCount: 10, limit: 3, page: 6, nextPage: 4 },
      { itemsCount: 10, limit: 3, page: 7, nextPage: 4 },
    ].forEach((e) => {
      expect(getNextPage(e.page, e.limit, e.itemsCount)).toEqual(e.nextPage);
    });
  });
});
