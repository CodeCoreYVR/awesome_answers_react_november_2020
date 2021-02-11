import './App.css';
import { Component } from 'react';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clocksCount: [1]
    }
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
