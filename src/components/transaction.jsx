import React from 'react'
import {GlobalContext} from '../context/GlobalContext'



export const Transaction = ({transactions}) => {
    return (
        <li>
        <button className="btn">X</button> 
       {transactions.description}

       <span>{transactions.transactionAmount}</span>
    </li>
        )
}
 