import { ReactNode } from "react";
import { ClickHandler } from "../../core/types/ClickHandler";

export interface ITimerPanelButtonProps {
  children: ReactNode;
  onClick?: ClickHandler;
}
