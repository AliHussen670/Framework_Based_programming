import logo from './logo.svg';
import './App.css';
import CreateTodo from './containers/CreateToDo';
import Table from './containers/Table'
function App() {
  return (
    <div className="App">
     < CreateTodo/>
   <Table/>
   
    </div>
  );
}

export default App;
