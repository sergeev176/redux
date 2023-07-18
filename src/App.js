import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addTodo, removeLastTodo } from './toolkitRedux/toolkitSlice';

function App() {

  const count = useSelector(state => state.toolkit.count);
  const todos = useSelector(state => state.toolkit.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <br />
      <button onClick={() => dispatch(increment())}>add</button> 
      <br />
      <button onClick={() => dispatch(decrement())}>get</button>
      <br />
      <button onClick={() => dispatch(addTodo(prompt()))}>add todo</button>
      <br />
      <button onClick={() => dispatch(removeLastTodo())}>remove last</button>
      {todos.map(todo => <div>{todo}</div>)}
    </div>
  );
}

export default App;
