import React, { useEffect, useState } from 'react'
import {getAllAccounts} from '../services/services'
import Cuenta from './cuenta'

function All() {

  const [Allaccounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getAllAccounts().then((data) => {
      setAccounts(data.data);
      setLoading(false);
    });
  }, []);

  //console.log(Allaccounts[0].id);

  console.log(Allaccounts);
  return (
    <div><h1><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
  </svg>  <label className='titleCard'> Lista de Cuentas </label></h1> <br></br>
    <h3>Cantidad: {Allaccounts.length}</h3> 
    <hr></hr>
      
    <div >

        {Allaccounts.map((account, index) => {
          console.log(account.attributes.Name);
          console.log(account.id);
         return ( <Cuenta key={account.id} id={account.id} name={account.attributes.Name} email={account.attributes.Email} saldo={account.attributes.Saldo} index={index%4} />);
        })}
    </div>  
      
    </div>
    
    
  )
}

export default All