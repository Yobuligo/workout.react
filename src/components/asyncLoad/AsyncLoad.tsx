import { useEffect, useState } from "react";
import { Spinner } from "../spinner/Spinner";
import { IAsyncLoadProps } from "./IAsyncLoadProps";

export function AsyncLoad<T>(props: IAsyncLoadProps<T>) {
  const [needsLoading, setNeedsLoading] = useState(true);

  useEffect(() => {
    if (needsLoading) {
      setTimeout(async () => {
        await props.load();
        setNeedsLoading(false);
      }, 2000);
    }
  }, [needsLoading, props]);

  return (
    <div className={props.className}>
      {needsLoading ? <Spinner /> : props.children}
    </div>
  );
}
