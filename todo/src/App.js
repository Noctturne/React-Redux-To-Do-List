import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Tasks from './components/Tasks/Tasks';
import FormTask from './components/Tasks/FormTask';

function App() {
  return (
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Tasks}/>
            <Route exact path="/tasks/new" component={FormTask}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
