import { IllegalArgumentError } from "../error/IllegalArgumentError";
import { texts } from "../i18n/texts";
import useTranslation from "./useTranslation";

export const useRenderSeconds = () => {
  const { t } = useTranslation();

  const render = (value: number): string => {
    if (value < 0) {
      throw new IllegalArgumentError();
    }

    if (value <= 90) {
      return `${value}${t(texts.general.seconds)}`;
    }

    // convert to minutes
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    if (seconds === 0) {
      return `${minutes}${t(texts.general.minutes)}`;
    } else {
      return `${minutes}${t(texts.general.minutes)} ${seconds}${t(
        texts.general.seconds
      )}`;
    }
  };
  return render;
};
