import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './context/aunction-context';

import Layout from './ui/Layout';

import './styles/globalStyles.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
