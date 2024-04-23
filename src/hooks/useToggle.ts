import { useCallback, useState } from "react";

export const useToggle = (
  initialValue: boolean
): [value: boolean, toggleValue: (newValue?: boolean) => boolean] => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback((newValue?: boolean): boolean => {
    if (newValue !== undefined) {
      setValue(newValue);
      return newValue;
    } else {
      let updatedValue: boolean = false;
      setValue((previous) => {
        updatedValue = !previous;
        return updatedValue;
      });
      return updatedValue;
    }
  }, []);

  return [value, toggleValue];
};
