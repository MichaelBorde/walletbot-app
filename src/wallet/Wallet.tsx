import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";
import { ConnectWallet } from "./ConnectWallet";

const metadata = {
  name: "Wallet App",
  description: "Wallet App with wagmi",
  url: "https://michaelborde.github.io/walletbot-app",
  icon: "https://avatars.githubusercontent.com/u/109633172",
};

const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    walletConnect({
      projectId: "68b33fff75e147d605a493edb3d65a49",
      metadata: {
        ...metadata,
        icons: [metadata.icon],
      },
    }),
    metaMask({
      dappMetadata: metadata,
      useDeeplink: false,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Wallet() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
