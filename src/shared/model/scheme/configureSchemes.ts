import { Scheme } from "./Scheme";

export const configureSchemes = <T, TScheme extends Scheme<T>>(
  config: TScheme
): TScheme => {
  return config;
};
