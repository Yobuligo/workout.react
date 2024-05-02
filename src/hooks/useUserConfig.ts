import { IUserConfig } from "../models/IUserConfig";
import { useLocalStorage } from "./useLocalStorage";

export const useUserConfig = (): [
  userConfig: IUserConfig,
  setUserConfig: (userConfig: IUserConfig) => void
] => {
  const [userConfig, setUserConfig] = useLocalStorage<IUserConfig>(
    "user-config",
    { displayTrainingDevices: false, selectedDeviceIds: [] }
  );
  return [userConfig, setUserConfig];
};
