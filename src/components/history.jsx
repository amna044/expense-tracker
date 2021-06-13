import React,{ useContext } from 'react'
import {useStateValue} from '../context/GlobalContext'



const History = () => {
  const [{basket},dispatch]=useStateValue()
     const handleDelete=()=>{
        dispatch({
            type:'Delete_All'
        })
     }

    return (
        <div> <h5>Transaction History</h5>
        <ul style={{listStyle:'none'}}>
            {basket.map((b,index)=>
            <li key={index}>{index+1}.{b}</li>
            )}
        </ul>
        <button onClick={handleDelete}>Dlete All</button>

        </div>
);
}
 
export default History;