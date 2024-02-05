import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = (props) => {
  return <>{props.children}</>;
};
