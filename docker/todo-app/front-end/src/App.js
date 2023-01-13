import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import './App.css';
import logo from './logo.png';

import { TaskProvider } from './context/taskContext';

import ItemAdd from './components/ItemAdd';
import ItemList from './components/ItemList';
import TaskReset from "./components/TaskReset";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span><h2>Trybe Todo List!</h2></span>
          <Switch>
            <TaskProvider>
              <Route exact={true} path="/">
                  <ItemAdd />
                  <ItemList />
              </Route>
              <Route exact={true} path="/debug">
                <TaskReset />
              </Route>
            </TaskProvider>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
