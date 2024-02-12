import { ReactNode } from "react";

export interface IAsyncLoadProps<T> {
  children?: ReactNode;
  className?: string;
  load: () => Promise<T>;
}
