import './App.css';
import { Component } from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
import Navbar from './components/Navbar';
import NewQuestionForm from './components/NewQuestionForm'
import SignInPage from './components/SignInPage'
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage'
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
    this.destroySession=this.destroySession.bind(this)
    this.handleSignUp=this.handleSignUp.bind(this)
  }

  componentDidMount() {

    Session.currentUser()
    .then(user=>{
      console.log('user', user);
      this.setState((state)=>{
        return {user:user}
      })
    })
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
  destroySession(){
    Session.destroy()
    .then(res=>{
      this.setState(
          (
          state=>{return {user:null}}
          )
        )
      })
  }
handleSignUp(){
  Session.currentUser().then(user=>{
    this.setState((state)=>{
      return {user:user}
    })
  })

}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
          <Switch>
            
            <Route exact path='/questions' component={QuestionIndexPage} />
            {/*<Route path='/questions/new' component={NewQuestionForm} />*/}
            <AuthRoute path='/questions/new' isAuth={this.state.user} component={NewQuestionForm}/>
            <Route path='/questions/:id' component={QuestionShowPage} />
            {/*<Route path='/sign_in'><SignInPage handleSubmit={this.handleSubmit}/></Route>*/}
            {/* https://reactrouter.com/web/api/Route/render-func */}
            <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
            <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSignUp={this.handleSignUp} {...routeProps}/>}/> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
