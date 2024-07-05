import { useAccount } from "wagmi";
import { Account } from "./Account";
import { WalletOptions } from "./WalletOptions";

export function ConnectWallet() {
  const { isConnected } = useAccount();
  return isConnected ? <Account /> : <WalletOptions />;
}
