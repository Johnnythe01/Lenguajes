import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import TodoButton from './Components/TodoButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
      </header>
    </div>
  );
}

export default App;