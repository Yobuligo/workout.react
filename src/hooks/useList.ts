import { useCallback, useState } from "react";
import { IList } from "../types/IList";

export const useList = <T>(
  compare: keyof T | ((a: T, b: T) => boolean),
  initialItems?: T[]
): IList<T> => {
  const [items, setItems] = useState<T[]>(initialItems ?? []);

  const createComparator = useCallback(
    () =>
      typeof compare === "function"
        ? compare
        : (a: T, b: T) => a[compare] === b[compare],
    [compare]
  );

  const append = useCallback(
    (item: T) => setItems((previous) => [...previous, item]),
    []
  );

  const remove = useCallback(
    (item: T) => {
      setItems((previous) => {
        const comparator = createComparator();
        const index = previous.findIndex((element) =>
          comparator(element, item)
        );
        if (index !== -1) {
          previous.splice(index, 1);
        }
        return [...previous];
      });
    },
    [createComparator]
  );

  return { append, items, remove };
};
