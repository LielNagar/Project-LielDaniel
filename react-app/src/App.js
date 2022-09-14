import React from 'react';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
//import IndexFilter from './components/indexFilter';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Header/>
        <SignUp/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
// <Routes>
//         <Route exact path="/LoginPage" component={LoginPage} />
//         </Routes>
export default App;