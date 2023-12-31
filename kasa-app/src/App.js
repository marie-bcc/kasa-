import './Styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Apropos from './pages/Apropos';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import  LogementDetails from './component/logements/LogementInformations';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/logement/:id" element={<LogementDetails />} />
          <Route path='/apropos' element={<Apropos />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
