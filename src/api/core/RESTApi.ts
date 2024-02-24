export abstract class RESTApi {
  get<T>(path: string): Promise<T> {
    return new Promise(async (resolve) => {
      const response = await fetch(path, { method: "GET" });
      const data = response.json();
      resolve(data);
    });
  }

  post<T>(path: string, bodyData: any): Promise<T> {
    return new Promise(async (resolve) => {
      const body = JSON.stringify(bodyData);
      const response = await fetch(path, { method: "POST", body });
      const data = await response.json();
      resolve(data);
    });
  }
}
