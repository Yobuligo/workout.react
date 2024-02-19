import { useState } from "react";
import { Api } from "../../api/Api";
import { AsyncLoad } from "../../components/asyncLoad/AsyncLoad";
import { Card } from "../../components/card/Card";
import useTranslation from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { IExerciseType } from "../../shared/model/exercise/IExerciseType";
import styles from "./ExerciseTypeSelector.module.scss";
import { IExerciseTypeSelectorProps } from "./IExerciseTypeSelectorProps";

export const ExerciseTypeSelector: React.FC<IExerciseTypeSelectorProps> = (
  props
) => {
  const { t } = useTranslation();
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
      <p>{t(texts.exerciseTypeSelector.explanation)}</p>
      <div className={styles.exerciseTypeSelector}>{items}</div>
    </AsyncLoad>
  );
};
