import ExpenseTracker from './components/expenseTracker';
import IncomeExpense from './components/incomeExpense';
import History from './components/history';
import AddTransaction from './components/AddTransaction';
import './app.css'

function App() {
  return (  
    <div  className='main-div'>
      <ExpenseTracker/> 
     <div>
      <IncomeExpense/>
      <History/> 
      <AddTransaction />   
      </div>     
    </div>
    
  );
}

export default App;
