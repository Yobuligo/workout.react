import { ReactNode } from "react";

export interface IPageProps {
  children: ReactNode;
  footer?: ReactNode;
  subTitle?: string;
  title: string;
}
