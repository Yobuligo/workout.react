import { texts } from "../i18n/texts";
import useTranslation from "./useTranslation";

export const useRenderTimes = () => {
  const { t } = useTranslation();

  const render = (value: number): string => {
    return `${value}${t(texts.general.times)}`;
  };

  return render;
};
