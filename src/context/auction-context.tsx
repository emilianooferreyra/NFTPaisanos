import { createContext, useContext } from 'react';
import { auctions } from '../data/auctions';
import { popularAuctions } from '../data/popular-auctions';
import { ethUsd } from '../data/eth-usd';

interface Props {
  children: React.ReactNode;
}

interface AunctionContextType {
  auctions: any;
  popularAuctions: any;
  ethUsd: any;
}

const AuctionContext = createContext<AunctionContextType | null>(null);

export const AunctionProvider = ({ children }: Props) => (
  <AuctionContext.Provider value={{ auctions, popularAuctions, ethUsd }}>{children}</AuctionContext.Provider>
);

export function useAunctionContext() {
  const context = useContext(AuctionContext);
  if (!context) {
    throw new Error('useAuctionContext must be used within an AuctionProvider');
  }
  return context;
}
