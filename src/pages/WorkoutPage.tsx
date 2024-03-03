import { Page } from "../components/pages/Page";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";

export const WorkoutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page
      title={t(texts.workoutPage.title)}
      subTitle={t(texts.workoutPage.subtitle)}
    >
      Hello World
    </Page>
  );
};
