import { Page } from "../../components/pages/Page";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";

export const ExerciseTypePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page
      title={t(texts.exerciseTypePage.title)}
      subTitle={t(texts.exerciseTypePage.subTitle)}
    ></Page>
  );
};
