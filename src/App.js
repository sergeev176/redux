import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name: name,
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  }

  return (
    <div>
      <h1>hello</h1>
      <div>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>add</button>
      <button onClick={() => getCash(Number(prompt()))}>get</button>
      <button onClick={() => addCustomer(prompt())}>добавить клиентов</button>

      {customers.length > 0 ?
        <div>
          {customers.map(item => <div onClick={() => removeCustomer(item.id)}>{item.name}</div>)}
        </div>
        :
        <div>
          клиентов пока нет
        </div>
      }
    </div>
  );
}

export default App;
