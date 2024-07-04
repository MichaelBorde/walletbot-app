import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const queryClient = new QueryClient();

const projectId = "68b33fff75e147d605a493edb3d65a49";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://michaelborde.github.io/walletbot-app",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
});

export function Wallet() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <w3m-button />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
