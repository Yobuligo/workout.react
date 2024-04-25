import { useContext, useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { Switch } from "../../components/switch/Switch";
import { AppContext } from "../../context/AppContext";
import { request } from "../../core/request";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { BodyWeightDevice } from "../../shared/model/device/BodyWeightDevice";
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

  const items = devices.map((device) => {
    return (
      <div key={device.id}>
        <DeviceSelector
          device={device}
          onSelect={onSelectDevice}
          onUnselect={onUnselectDevice}
          selected={context.selectedDevices.contains(device)}
        />
      </div>
    );
  });

  return (
    <AsyncLoad
      load={async () => {
        // todo: filter by selected devices
        const devices = await Api.workoutType.findDevices(props.workoutType);
        devices.push(BodyWeightDevice);
        setDevices(devices);
      }}
    >
      <div className={styles.body}>
        <div>
          <div className={styles.header}>
            <p>{t(texts.deviceSelectorList.explanation)}</p>
            <Switch checked={checked} onChange={setChecked} />
          </div>
          <div className={styles.items}>{items}</div>
        </div>
        {checked && (
          <div className={styles.exerciseList}>
            <ExerciseList
              exercises={exercises}
              devices={context.selectedDevices.items}
            />
          </div>
        )}
      </div>
    </AsyncLoad>
  );
};
