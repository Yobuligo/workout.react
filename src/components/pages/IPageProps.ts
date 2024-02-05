import { ReactNode } from "react";

export interface IPageProps {
  children?: ReactNode;
  footer?: ReactNode;
  navigateBackPath?: string;
  subTitle?: string;
  title: string;
}
