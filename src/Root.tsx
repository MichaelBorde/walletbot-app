import { SDKProvider, useLaunchParams } from "@tma.js/sdk-react";
import { useEffect } from "react";
import { App } from "./App";

export function Root() {
  const startParam = useLaunchParams().startParam;
  const debug = startParam === "debug";

  useEffect(() => {
    console.log(startParam);
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug, startParam]);

  return (
    <SDKProvider acceptCustomStyles debug>
      <App />
    </SDKProvider>
  );
}
