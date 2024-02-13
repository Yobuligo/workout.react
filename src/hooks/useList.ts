import { useCallback, useState } from "react";
import { IList } from "../types/IList";

export const useList = <T>(
  compare: (a: T, b: T) => boolean,
  initialList?: T[]
): IList<T> => {
  const [items, setItems] = useState<T[]>(initialList ?? []);

  const append = useCallback(
    (item: T) => setItems((previous) => [...previous, item]),
    []
  );

  const remove = useCallback(
    (item: T) => {
      setItems((previous) => {
        const index = previous.findIndex((element) => compare(element, item));
        if (index !== -1) {
          previous.splice(index, 1);
        }
        return [...previous];
      });
    },
    [compare]
  );

  return { append, items, remove };
};
