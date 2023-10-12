import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AunctionProvider } from './context/aunction-context';
import Layout from './ui/Layout';
import './styles/globalStyles.css';

const App = () => {
  return (
    <AunctionProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </AunctionProvider>
  );
};

export default App;
