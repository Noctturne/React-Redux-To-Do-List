import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Tasks from './components/Tasks/Tasks';
import FormTask from './components/Tasks/FormTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
      <Router>
        <Provider store={store}>
            <Header/>
            <div className="container-fluid p-0 m-0">
              <Switch>
                <Route exact path="/" component={Tasks}/>
                <Route exact path="/tasks/new" component={FormTask}/>
              </Switch>
            </div>
        </Provider>
      </Router>
  );
}

export default App;
