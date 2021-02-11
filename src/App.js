import './App.css';
import { Component } from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Session } from './requests';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clocksCount: [1]
    }
  }

  componentDidMount() {
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    }).then(console.log)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={() => <div>Hello World</div> } />
            <Route path='/questions/:id' component={QuestionShowPage} />
            <Route path='/questions' component={QuestionIndexPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
