import { IUserConfig } from "../models/IUserConfig";
import { useLocalStorage } from "./useLocalStorage";

export const useUserConfig = () => {
  const [userConfig, setUserConfig] = useLocalStorage<IUserConfig>(
    "user-config",
    { selectedDevices: [] }
  );
  return [userConfig, setUserConfig];
};
