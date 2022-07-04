import React from 'react'
import './App.css';
import Navbarra from './navBar/Navbar';
import Home from './home/home';
import All from './All/All';
import Withdraw from './Withdraw/Withdraw';
import Deposit from './Deposit/Deposit';
import Createacc from './createAccount/CreateAccount';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes , Link } from 'react-router-dom';





function App() {
  const UserContext = React.createContext(null);
  //const Route = ReactRouterDOM.Route;
  //const Link = ReactRouterDOM.Link;
  //const HashRouter = ReactRouterDOM.HashRouter;

  return (
    
    <Router>
    <div>
    <div><Navbarra/></div>
    <hr className='hrself' />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/create"  element={<Createacc />} />
      <Route path="/deposit"  element={<Deposit />} />
      <Route path="/withdraw"  element={<Withdraw />} />
      <Route path="/all"  element={<All />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;


// <Home/>