import './App.css';
import { Component } from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';
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
        {
          this.state.clocksCount.map((c, i) => {
            return <CurrentDateTime key={i} />
          })
        }
      </div>
    );
  }
}

export default App;
