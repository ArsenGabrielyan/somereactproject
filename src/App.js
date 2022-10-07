import './App.scss';
import {Routes, Route} from "react-router-dom";
import ActiveToDos from './components/activeitem';
import CompletedToDos from './components/completeditemlist';
import AddToDo from './components/additem';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<ActiveToDos/>} />
            <Route path="/completed" element={<CompletedToDos/>} />
            <Route path="/add" element={<AddToDo/>} />
        </Routes>
    </div>
  );
}

export default App;
