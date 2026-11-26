import { describe, expect, it } from 'vitest';
import { getPaginationLastPage } from './getPaginationLastPage';

describe('getPaginationLastPage', () => {
  it('The number of elements in an array cannot be negative', () => {
    const limit = 10;
    const itemsCount = -1;
    const throwName = 'The number of elements in an array cannot be negative';
    expect(() => getPaginationLastPage(limit, itemsCount)).toThrow(throwName);
  });

  it('returns the first page when itemsCount is 0', () => {
    const limit = 10;
    const itemsCount = 0;
    const actual = getPaginationLastPage(limit, itemsCount);
    expect(actual).toEqual(1);
  });

  it('returns the correct last page for a given limit and items count', () => {
    [
      { limit: 3, itemsCount: 9, page: 3 },
      { limit: 3, itemsCount: 10, page: 4 },
      { limit: 3, itemsCount: 11, page: 4 },
      { limit: 3, itemsCount: 12, page: 4 },
      { limit: 3, itemsCount: 13, page: 5 },
    ].forEach((e) => {
      expect(getPaginationLastPage(e.limit, e.itemsCount)).toEqual(e.page);
    });
  });

  it('falls back to default limit when limit is zero or negative', () => {
    [
      { limit: -100, itemsCount: 20, page: 20 },
      { limit: -1, itemsCount: 20, page: 20 },
      { limit: 0, itemsCount: 20, page: 20 },
    ].forEach((e) => {
      expect(getPaginationLastPage(e.limit, e.itemsCount)).toEqual(e.page);
    });
  });
});
