import './App.css';
import Input from './components/input';
import Delete from './components/delete';
import TaskList from './components/results';

function App() {
  return (
    <div className="App">
      <div className='data-input-container'>
        <Input/>
      </div>
    </div>
  );
}

export default App;
