import { IDestructable } from "../types/IDestructable";

/**
 * Returns if the given {@link value} is destructable.
 */
export const isDestructable = (value: any): value is IDestructable => {
  return "destruct" in value;
};
