import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ListCar from './components/ListCar';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import IndexFilter from './components/indexFilter';
import Profile from './components/Profile';




function App() {
  return ( 
    <BrowserRouter>
      <div>
        <Header/>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<IndexFilter/>}></Route>
          <Route exact path="/SignUp" element={<SignUp/>}></Route>
          <Route exact path="/Login" element={<LoginPage/>}></Route>
          <Route exact path="/Profile" element={<Profile/>}></Route>
          <Route exact path="/List" element={<ListCar/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;