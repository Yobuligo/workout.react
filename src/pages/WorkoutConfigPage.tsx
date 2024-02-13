import { ReactComponent as Athlete } from "../assets/plank.svg";
import { Page } from "../components/pages/Page";
import { DeviceSelectorList } from "../features/deviceSelectorList/DeviceSelectorList";
import { WorkoutConfigFooter } from "../features/workoutConfigFooter/WorkoutConfigFooter";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import styles from "./WorkoutConfigPage.module.scss";

export const WorkoutConfigPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page
      footer={<WorkoutConfigFooter />}
      subTitle={t(texts.workoutConfigPage.subTitle)}
      title={t(texts.workoutConfigPage.title)}
    >
      <DeviceSelectorList />
      <Athlete className={styles.athlete} />
    </Page>
  );
};
