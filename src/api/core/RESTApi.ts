export abstract class RESTApi {
  get<T>(path: string): Promise<T> {
    return new Promise(async (resolve) => {
      const response = await fetch(path, { method: "GET" });
      const data = response.json();
      resolve(data);
    });
  }
}
