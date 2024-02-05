import { fetchBackup } from "../../App";
import { MockRouter } from "./MockRouter";

const isUpdateRequest = (path: string) => {
  return path.match(/main.*update.json/);
};

export const fetchMock = (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  const path = input.toString();
  if (isUpdateRequest(path)) {
    return fetchBackup(input, init);
  }

  return MockRouter.handle(input.toString(), init);
};
