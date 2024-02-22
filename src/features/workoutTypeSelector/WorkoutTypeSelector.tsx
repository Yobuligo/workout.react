import { useState } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { Card } from "../../components/card/Card";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IWorkoutType } from "../../shared/model/exercise/IWorkoutType";
import styles from "./WorkoutTypeSelector.module.scss";
import { IWorkoutTypeSelectorProps } from "./IWorkoutTypeSelectorProps";

export const WorkoutTypeSelector: React.FC<IWorkoutTypeSelectorProps> = (
  props
) => {
  const { t } = useTranslation();
  const [workoutTypes, setWorkoutTypes] = useState<IWorkoutType[]>([]);

  const items = workoutTypes.map((workoutType) => (
    <div key={workoutType.id}>
      <Card
        className={styles.card}
        onClick={() => props.onSelect?.(workoutType)}
      >
        {workoutType.description}
      </Card>
    </div>
  ));

  return (
    <AsyncLoad
      load={async () => {
        const workoutTypes = await Api.workoutType.findAll();
        setWorkoutTypes(workoutTypes);
      }}
    >
      <p>{t(texts.workoutTypeSelector.explanation)}</p>
      <div className={styles.workoutTypeSelector}>{items}</div>
    </AsyncLoad>
  );
};
