import React, { useState} from 'react';
import { useStateValue } from '../context/GlobalContext';

const AddTransaction = () => {
    const [{basket},dispatch]=useStateValue()
    console.log("iam base" , basket)
let [description, setdescription] = useState([]);
let [Amount, setAmount] = useState()
const handleChange=(e)=>{
setdescription(e.target.value)
console.log(description)
}
const handleClick=()=>{
dispatch({
    type:'Add_to_cart',
    item:description
})
setdescription("")
}
    return (  
        <div>
            <h5>Add Transaction</h5>
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <div>
                <label htmlFor="Description">Description</label>
                <input 
                onChange={handleChange}
                value={description}
                 type="text"
                placeholder="add transaction"
                 />

            </div>
           <div>
                <label htmlFor="Amount">Amount</label>
                <input 
                value={Amount}
                onChange={(e)=>{setAmount(e.target.value)}}
                 type="number"
                placeholder="Amount spent"
                 />

           </div>
           <button 
           onClick={handleClick}
           >Add Transaction</button>
           </form>

        </div>
    );
}
 
export default AddTransaction;