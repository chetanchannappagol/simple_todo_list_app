import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import "./App.css";
import TodoForm from "./component/TodoForm";
import Navbar from "./component/Navbar";
import TodoState from "./Context/TodoState";
import TododList from "./component/TododList";

function App() {
  return (
    <TodoState>
      <Router>
      <div className="App">
        <Navbar />
      </div>
        <Routes>
          <Route path='/' element={<TodoForm/>} />
          <Route path='todolist' element={<TododList/>} />
        </Routes>
      </Router>
    </TodoState>
  );
}

export default App;
