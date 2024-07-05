import { Button } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";
import { Connector, useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <div className={"p-4 flex gap-4"}>
      {connectors.map((connector) => (
        <WalletOption
          key={connector.uid}
          connector={connector}
          onClick={() => connect({ connector })}
        />
      ))}
    </div>
  );
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <Button disabled={!ready} onClick={onClick}>
      {connector.name}
    </Button>
  );
}
