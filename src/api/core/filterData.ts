export const filterData = <TData, TParams>(data: TData[], params: TParams) => {
  return data.filter((row) => {
    for (const paramName in params) {
      const rowParamValue = (row as any)[paramName];
      const paramValue = params[paramName];
      if (rowParamValue !== paramValue) {
        return false;
      }
    }
    return true;
  });
};
