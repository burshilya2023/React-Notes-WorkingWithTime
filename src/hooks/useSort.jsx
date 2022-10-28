import { useMemo } from "react";
export const useSorted = (items, sort) => {
  const sortedItem = useMemo(() => {
    if (sort) {
      return [...items].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return items;
  }, [sort, items]);
  return sortedItem;
};
export const useSortedSearch = (items, sort, query) => {
  const sortedItems = useSorted(items, sort);
  const sortedAndSearched = useMemo(() => {
    return sortedItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedItems]);
  return sortedAndSearched;
};
