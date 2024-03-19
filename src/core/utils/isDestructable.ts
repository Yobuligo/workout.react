import { IDestructible } from "../types/IDestructible";

/**
 * Returns if the given {@link value} is destructable.
 */
export const isDestructable = (value: any): value is IDestructible => {
  return "destruct" in value;
};
