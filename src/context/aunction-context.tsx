import React, { createContext, useContext } from 'react';

import { aunctions } from '../data/aunctions';
import { popularAunctions } from '../data/popular-aunctions';
import { ethUsd } from '../data/eth-usd';
import { aunctionsData } from '../types/AunctionsData';

interface Props {
  children: React.ReactNode;
}

interface AunctionContextType {
  aunctions: aunctionsData[] | any;
  popularAunctions: aunctionsData[] | any;
  ethUsd: aunctionsData | any;
}

const AunctionContext = createContext<AunctionContextType | null>(null);

export const AunctionProvider = ({ children }: Props) => (
  <AunctionContext.Provider value={{ aunctions, popularAunctions, ethUsd }}>{children}</AunctionContext.Provider>
);

export function useAunctionContext() {
  const context = useContext(AunctionContext);
  if (!context) {
    throw new Error('useAuctionContext must be used within an AuctionProvider');
  }
  return context;
}
