import { useState } from "react";
import { ReactComponent as Athlete } from "../assets/plank.svg";
import { Page } from "../components/pages/Page";
import { DeviceSelectorList } from "../features/deviceSelectorList/DeviceSelectorList";
import { WorkoutConfigFooter } from "../features/workoutConfigFooter/WorkoutConfigFooter";
import useTranslation from "../hooks/useTranslation";
import { texts } from "../i18n/texts";
import { IDevice } from "../shared/model/exercise/IDevice";
import styles from "./WorkoutConfigPage.module.scss";

export const WorkoutConfigPage: React.FC = () => {
  const [selectedDevices, setSelectedDevices] = useState<IDevice[]>([]);
  const { t } = useTranslation();

  const onSelectDevice = (device: IDevice) =>
    setSelectedDevices((previous) => [...previous, device]);

  const onUnselectDevice = (device: IDevice) =>
    setSelectedDevices((previous) => {
      const index = previous.findIndex((item) => (item.id = device.id));
      if (index !== -1) {
        previous.splice(index, 1);
      }
      return previous;
    });

  return (
    <Page
      footer={<WorkoutConfigFooter />}
      subTitle={t(texts.workoutConfigPage.subTitle)}
      title={t(texts.workoutConfigPage.title)}
    >
      <DeviceSelectorList
        onSelect={onSelectDevice}
        onUnselect={onUnselectDevice}
      />
      <Athlete className={styles.athlete} />
    </Page>
  );
};
