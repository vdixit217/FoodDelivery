import styled,{ThemeProvider} from 'styled-components';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar'
import {Home} from './pages/Home.jsx';
import { lightTheme } from "./utils/Themes.js";
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Authentication from './pages/Authentication';
import Favourites from './pages/Favourites.jsx';
import Cart from './pages/Cart.jsx';  
import FoodDetails from './pages/FoodDetails.jsx';
import FoodListing from './pages/FoodListing.jsx';

const Container = styled.div``;

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  return (
  
    <ThemeProvider theme = {lightTheme}>
      <BrowserRouter>
      <Container>
        <Navbar setOpenAuth={setOpenAuth} openAuth={openAuth}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/dishes/:id" element={<FoodDetails/>}/>
          <Route path="/dishes" element={<FoodListing/>}/>
        </Routes>
        {openAuth && <Authentication  setOpenAuth={setOpenAuth} openAuth={openAuth}/>}
      </Container>
      </BrowserRouter>
    </ThemeProvider>
 
  );
}

export default App;
