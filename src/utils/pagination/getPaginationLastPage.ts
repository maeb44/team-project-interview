export const getPaginationLastPage = (limit: number, itemsCount: number): number => {
  if (itemsCount < 0) {
    throw new Error('The number of elements in an array cannot be negative');
  }

  if (itemsCount === 0) {
    return 1;
  }

  if (limit <= 0) {
    return itemsCount;
  }

  return Math.ceil(itemsCount / limit);
};
