import React from 'react'
import { useState , useEffect} from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import Createacc from '../createAccount/CreateAccount';
import './Navbar.css'


function Navbarra() {

  const menusList = {
    home: false,
    create: false,
    depot: false,
    withdraw: false,
    all: false,
  }

  const [menus, setActiveMenu] = useState(menusList);

  function CambiaColor(e, menuSelected){

    const resetMenu = {
      home: false,
      create: false,
      depot: false,
      withdraw: false,
      all: false,
    }

    //console.log(resetMenu);
    resetMenu[menuSelected] = true;
    //console.log(resetMenu);

    setActiveMenu(resetMenu);
    
  }

  console.log(menus.home);
  console.log(menus.create);
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" title="Pruebame!" onClick={(event) => CambiaColor(event, "home")} to="/"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16">
  <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/>
</svg></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-ic on"></span>
  </button>
  
  <div className="collapse navbar-collapse menuOptions " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item">
        <Link className={(menus.home) ? "nav-link active " : "nav-link textColor "} title="Regresar a la pagina principal" onClick={(event) => CambiaColor(event, "home")} to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className={(menus.create) ? "nav-link active " : "nav-link textColor "} title="Crear cuentas de banco" onClick={(event) => CambiaColor(event, "create")} to="/create">Crear Cuenta</Link>
      </li>
      <li className="nav-item">
        <Link className={(menus.depot) ? "nav-link active " : "nav-link textColor "} title="Depositar dinero en cuentas" onClick={(event) => CambiaColor(event, "depot")} to="/deposit">Depositar</Link>
      </li>
      <li className="nav-item">
        <Link className={(menus.withdraw) ? "nav-link active " : "nav-link textColor "} title="Retirar dinero de cuentas" onClick={(event) => CambiaColor(event, "withdraw")} to="/withdraw">Retirar</Link>
      </li>
      <li className="nav-item">
        <Link className={(menus.all) ? "nav-link active " : "nav-link textColor "} title="Ver la lista de las cuentas" onClick={(event) => CambiaColor(event, "all")} to="/all">All Data</Link>
      </li>
      
    </ul>

  </div>
  
</nav>
  );
}

export default Navbarra;
