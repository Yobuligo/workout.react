import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { configureDevices } from "./configureDevices";

export const PowerDevices = configureDevices({
  fasciaRole: {
    id: nextId(),
    title: texts.fasciaDevices.fasciaRole,
  },
});
