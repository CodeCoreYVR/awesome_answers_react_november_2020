import './App.css';
import { Component } from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import Navbar from './components/Navbar';
import NewQuestionForm from './components/NewQuestionForm'
import SignInPage from './components/SignInPage'
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
      clocksCount: [1],
      user:null
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // Session.create({
    //   email: 'js@winterfell.gov',
    //   password: 'supersecret'
    // }).then(console.log)
  }
  handleSubmit(params){
    // params look like this : {email: 'js@winterfell.gov', password: 'supersecret'}
    Session.create(params).then(()=>{
      return Session.currentUser()}
      ).then(user=>{
        console.log('user', user);
        this.setState((state)=>{
          return {user:user}
        })
      })

  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Switch>
            
            <Route exact path='/questions' component={QuestionIndexPage} />
            <Route path='/questions/new' component={NewQuestionForm} />
            <Route path='/questions/:id' component={QuestionShowPage} />
            <Route path='/sign_in'><SignInPage handleSubmit={this.handleSubmit}/></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
