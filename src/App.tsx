import React,{ useState } from 'react';
import './App.css';
import List from './Component/List';
import Unordered from './Component/Unordered';

const myName:string = 'JJ'
const game:string[] = ['candy crush', 'daddy']

function App() {
  const [todo, setToDo] = useState<string[]>([]);
  const [text, setText] = useState<string>('');

  const toDoListHandler = (val:React.FormEvent<HTMLInputElement>) => {
    if (val.currentTarget.value.length > 0) {
      setText(val.currentTarget.value);
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
