import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Workout: React.FC = () => {
  const context = useContext(AppContext);

  const items = context.selectedDevices.items.map((device) => (
    <div key={device.id}>{device.name}</div>
  ));

  return <>{items}</>;
};
