import { useMemo, useState } from "react";
import { db } from "../db/db";
import { IUserConfig } from "../models/IUserConfig";

export const useUserConfig = () => {
  const UserConfig = useMemo(
    () => db.define<IUserConfig>("user-config").build({ uuid: true }),
    []
  );

  const [userConfig, setUserConfig] = useState<IUserConfig>();
};
