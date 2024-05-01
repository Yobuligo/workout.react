import { useState } from "react";
import { readLocalStorage } from "../core/utils/readLocalStorage";
import { writeLocalStorage } from "../core/utils/writeLocalStorage";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [value: T, updateValue: (newValue: T) => void] => {
  const [value, setValue] = useState<T>(
    readLocalStorage(key) ?? writeLocalStorage(key, initialValue)
  );

  const updateValue = (newValue: T) => {
    setValue(newValue);
    writeLocalStorage(key, newValue);
  };

  return [value, updateValue];
};
