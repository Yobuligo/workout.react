import { useContext, useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { Switch } from "../../components/switch/Switch";
import { AppContext } from "../../context/AppContext";
import { request } from "../../core/request";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IDevice } from "../../shared/model/device/IDevice";
import { IExercise } from "../../shared/model/exercise/IExercise";
import { WorkoutType } from "../../shared/types/WorkoutType";
import { DeviceSelector } from "../deviceSelector/DeviceSelector";
import { ExerciseList } from "../exercise/exerciseList/ExerciseList";
import styles from "./DeviceSelectorList.module.scss";
import { IDevicePickerListProps } from "./IDeviceSelectorListProps";

export const DeviceSelectorList: React.FC<IDevicePickerListProps> = (props) => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const context = useContext(AppContext);
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const [exercises, setExercises] = useState<IExercise[]>([]);

  useEffect(() => {
    request(async () => {
      const exercises = await Api.exercise.findByWorkoutType(WorkoutType.POWER);
      setExercises(exercises);
    });
  }, [checked]);

  const onSelectDevice = (device: IDevice) =>
    context.selectedDevices.append(device);

  const onUnselectDevice = (device: IDevice) =>
    context.selectedDevices.remove(device);

  const items = devices.map((device) => (
    <div key={device.id}>
      <DeviceSelector
        device={device}
        onSelect={onSelectDevice}
        onUnselect={onUnselectDevice}
        selected={false}
      />
    </div>
  ));

  return (
    <AsyncLoad
      load={async () => {
        const devices = await Api.workoutType.findDevices(props.workoutType);
        setDevices(devices);
      }}
    >
      <div className={styles.header}>
        <p>{t(texts.deviceSelectorList.explanation)}</p>
        <Switch checked={checked} onChange={setChecked} />
      </div>
      <div className={styles.items}>{items}</div>
      {checked && (
        <div>
          <ExerciseList exercises={exercises} />
        </div>
      )}
    </AsyncLoad>
  );
};
