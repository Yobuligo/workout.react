import { useInitialize } from "../../hooks/useInitialize";
import { useToggle } from "../../hooks/useToggle";
import { Spinner } from "../spinner/Spinner";
import { IAsyncLoadProps } from "./IAsyncLoadProps";

export function AsyncLoad<T>(props: IAsyncLoadProps<T>) {
  const [needsLoading, toggleNeedsLoading] = useToggle(true);

  useInitialize(async () => {
    await props.load();
    toggleNeedsLoading();
  });

  return (
    <div className={props.className}>
      {needsLoading ? <Spinner /> : props.children}
    </div>
  );
}
