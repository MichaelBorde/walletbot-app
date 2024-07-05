import { Button, Text } from "@telegram-apps/telegram-ui";
import { useAccount, useDisconnect } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {address && <Text>{address}</Text>}
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </div>
  );
}
