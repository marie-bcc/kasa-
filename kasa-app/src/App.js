import './Styles/main.scss'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Apropos from './pages/Apropos';
import Navbar from './component/Navbar';
import Footer from './component/Footer'; 





function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/apropros' element={<Apropos/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}


export default App;
