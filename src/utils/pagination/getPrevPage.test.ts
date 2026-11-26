import { describe, expect, it } from 'vitest';
import { getPrevPage } from './getPrevPage';

describe('getPaginationLastPage', () => {
  it('returns 1 as previous page when page is 1 or less', () => {
    [
      { itemsCount: 10, limit: 5, page: -10, prevPage: 1 },
      { itemsCount: 10, limit: 5, page: -1, prevPage: 1 },
      { itemsCount: 10, limit: 5, page: 0, prevPage: 1 },
      { itemsCount: 10, limit: 5, page: 1, prevPage: 1 },
    ].forEach((e) => {
      expect(getPrevPage(e.page, e.limit, e.itemsCount)).toEqual(e.prevPage);
    });
  });

  it('returns the previous page when page > 1', () => {
    [
      { itemsCount: 10, limit: 3, page: 4, prevPage: 3 },
      { itemsCount: 10, limit: 3, page: 3, prevPage: 2 },
      { itemsCount: 10, limit: 3, page: 2, prevPage: 1 },
    ].forEach((e) => {
      expect(getPrevPage(e.page, e.limit, e.itemsCount)).toEqual(e.prevPage);
    });
  });

  it('returns the last page as previous page when page exceeds the last page', () => {
    [
      { itemsCount: 10, limit: 3, page: 10000, prevPage: 4 },
      { itemsCount: 10, limit: 3, page: 5, prevPage: 4 },
      { itemsCount: 10, limit: 3, page: 6, prevPage: 4 },
      { itemsCount: 10, limit: 3, page: 7, prevPage: 4 },
    ].forEach((e) => {
      expect(getPrevPage(e.page, e.limit, e.itemsCount)).toEqual(e.prevPage);
    });
  });
});
