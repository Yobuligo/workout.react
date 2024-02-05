import { MockRouter } from "./MockRouter";

export const fetchMock = (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  return MockRouter.handle(input.toString(), init);
};
