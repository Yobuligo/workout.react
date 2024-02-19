import { useState } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { Card } from "../../components/card/Card";
import { IExerciseType } from "../../shared/model/exercise/IExerciseType";
import styles from "./ExerciseTypeSelector.module.scss";
import { IExerciseTypeSelectorProps } from "./IExerciseTypeSelectorProps";

export const ExerciseTypeSelector: React.FC<IExerciseTypeSelectorProps> = (
  props
) => {
  const [exerciseTypes, setExerciseTypes] = useState<IExerciseType[]>([]);

  const items = exerciseTypes.map((exerciseType) => (
    <div key={exerciseType.id}>
      <Card
        className={styles.card}
        onClick={() => props.onSelect?.(exerciseType)}
      >
        {exerciseType.description}
      </Card>
    </div>
  ));

  return (
    <AsyncLoad
      load={async () => {
        const exerciseTypes = await Api.exerciseType.findAll();
        setExerciseTypes(exerciseTypes);
      }}
    >
      <div className={styles.exerciseTypeSelector}>{items}</div>
    </AsyncLoad>
  );
};
