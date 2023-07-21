import './Styles/main.scss'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Apropos from './pages/Apropos';
import Navbar from './component/Navbar';




function App() {
  return (
    
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/apropros' element={<Apropos/>}/>
          
        </Routes>
        
      </BrowserRouter>
    </>



  );
}

export default App;
