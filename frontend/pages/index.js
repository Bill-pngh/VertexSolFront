import { useWallet } from '@solana/wallet-adapter-react';
import { WalletModalButton } from '@solana/wallet-adapter-react-ui';
import SnipeTokens from '../components/SnipeTokens';
import Portfolio from '../components/Portfolio';
import ConnectWallet from '../components/ConnectWallet';
import Chart from '../components/Chart';
import Balance from '../components/Balance';
import Features from '../components/Features';

export default function Home() {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl mb-8">VertexSol</h1>
      <div className="flex flex-col items-center">
        <WalletModalButton className="bg-blue-500 px-4 py-2 rounded-lg mb-4">
          {connected ? 'Wallet Connected' : 'Connect Wallet'}
        </WalletModalButton>
        {connected && (
          <>
            <SnipeTokens />
            <Portfolio />
            <ConnectWallet />
            <Chart />
            <Balance />
            <Features />
          </>
        )}
      </div>
    </div>
  );
}
