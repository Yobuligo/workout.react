import { IDevice } from "../../shared/model/exercise/IDevice";

export const fetchMock = (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  if (input === "/devices") {
    return new Promise<Response>((resolve) => {
      const devices: IDevice[] = [
        { id: "1", name: "Kettle bell" },
        { id: "2", name: "Balance board" },
      ];
      const blob = new Blob([JSON.stringify(devices)], {
        type: "application/json",
      });
      const init = { status: 200, statusText: "Mock data fetched." };
      const response = new Response(blob, init);
      resolve(response);
    });
  }
  throw new Error();
};
