import React, { createContext, useContext } from 'react';

import { aunctions } from '../data/aunctions';
import { popularAunctions } from '../data/popular-aunctions';
import { ethUsd } from '../data/eth-usd';

interface Props {
  children: React.ReactNode;
}

const AunctionContext = createContext<any | null>(null);

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
