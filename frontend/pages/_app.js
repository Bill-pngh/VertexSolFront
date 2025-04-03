import '../styles/globals.css';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';

function MyApp({ Component, pageProps }) {
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default MyApp;
