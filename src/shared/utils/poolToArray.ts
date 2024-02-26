import { Pool } from "../types/Pool";

/**
 * Converts the properties of a pool to an array
 */
export const poolToArray = <T, TPool extends Pool<T>>(instance: TPool): T[] => {
  const list: T[] = [];
  for (const propName in instance) {
    list.push((instance as any)[propName]);
  }
  return list;
};
