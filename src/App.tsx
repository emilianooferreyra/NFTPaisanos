import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './ui/Layout';

import './styles/globalStyles.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
