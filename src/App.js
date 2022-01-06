import { useState } from 'react';
import './App.css';
import List from './Component/List';
import Unordered from './Component/Unordered';

const myName = 'JJ'
const game = ['candy crush', 'daddy']

function App() {
  const [todo, setToDo] = useState([]);
  const [text, setText] = useState('');

  const toDoListHandler = (val) => {
    if (val.target.value.length > 0) {
      setText(val.target.value);
    }
  }

  const onSubmitHandler = () => {
    if (text.length > 0) {
      setToDo([...todo,text]);
      setText('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <List myName={myName} age={18} games={game} />
        <div>
          <input type="text" onChange={toDoListHandler} value={text} />
          <button onClick={onSubmitHandler}>Add to list</button>
        </div>
        <Unordered>
          {todo.map((val) => {
            return <li>{val}</li>
          })}
        </Unordered>
      </header>
    </div>
  );
}

export default App;
