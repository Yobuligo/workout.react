import { useParams } from "react-router-dom";
import { checkNotNull } from "../utils/checkNotNull";

export const useRouteParam = <T>(paramName: string): T => {
  const instance: any = {};
  instance[paramName] = "";
  type ParamType = typeof instance;
  const params = useParams<ParamType>();
  return checkNotNull((params as any)[paramName]);
};
