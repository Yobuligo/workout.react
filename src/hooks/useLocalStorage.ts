import { useState } from "react";
import { deleteLocalStorage } from "../core/utils/deleteLocalStorage";
import { readLocalStorage } from "../core/utils/readLocalStorage";
import { writeLocalStorage } from "../core/utils/writeLocalStorage";

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const [value, setValue] = useState<T | undefined>(
    readLocalStorage(key) ?? initialValue
  );

  const updateValue = (newValue: T | undefined) => {
    setValue(() => {
      if (!newValue) {
        deleteLocalStorage(key);
      } else {
        writeLocalStorage(key, newValue);
      }

      return newValue;
    });
  };

  return [value, updateValue];
};
