// import { createContext, useContext, useEffect, useState } from 'react';
// import { getCurrentETHPrice, getPopularAuctions, getAuctions } from '../services/api';
// import { AuctionData } from '../types/AuctionTypes';

// interface AppContextProps {
//   children: React.ReactNode;
// }

// interface AppContextType {
//   ethPrice: number | null;
//   popularAuctions: AuctionData[] | null;
//   auctions: AuctionData[] | null;
//      fetchEthPrice: () => void;
//     fetchPopularAuctions: () => void;
//     fetchAuctions: () => void;
// }

// const AppContext = createContext({});

// const AppContextProvider = ({ children }: AppContextProps) => {
//   const [ethPrice, setEthPrice] = useState<number | null>(null);
//   const [popularAuctions, setPopularAuctions] = useState<AuctionData[] | null>(null);
//   const [auctions, setAuctions] = useState<AuctionData[] | null>(null);

//   const fetchEthPrice = async () => {
//     try {
//       const data = await getCurrentETHPrice();
//       setEthPrice(data);
//     } catch (error) {
//       console.error('Error fetching ETH price:', error);
//     }
//   };

//   const fetchPopularAuctions = async () => {
//     try {
//       const data = await getPopularAuctions();
//       setPopularAuctions(data);
//     } catch (error) {
//       console.error('Error fetching popular auctions:', error);
//     }
//   };

//   const fetchAuctions = async () => {
//     try {
//       const data = await getAuctions();
//       setAuctions(data);
//     } catch (error) {
//       console.error('Error fetching auctions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchEthPrice();
//     fetchPopularAuctions();
//     fetchAuctions();
//   }, []);

//   return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
// };

// const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('Error fetching App Context');
//   }
//   return context;
// };

// export { AppContextProvider, useAppContext };
