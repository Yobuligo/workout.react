import { IExerciseProps } from "./IExerciseProps";

export const Exercise: React.FC<IExerciseProps> = (props) => {
  const muscleGroups = props.exercise.muscleGroups.map(
    (muscleGroup) => muscleGroup
  );

  const devices = props.exercise.devices?.map((device) => device.title);

  return (
    <>
      <div>{props.exercise.title}</div>
      <div>{props.exercise.description}</div>
      <div>{props.exercise.difficulty}</div>
      <div>Muscle group: {muscleGroups}</div>
      {devices && devices.length > 0 && <div>Devices: {devices}</div>}
    </>
  );
};
