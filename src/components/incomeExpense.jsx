import React, {useContext} from 'react';
import { useStateValue } from '../context/GlobalContext';


export default function IncomeExpense() {
 

   
    return (
        <div className="inc-cont" >
          <div  >
              <h2>Income</h2>
              <span>$0.00</span>
          </div>
          <div>
              <h2>Expanse</h2>
              <span>$0.00</span>
          </div>
        </div>
    )
}
