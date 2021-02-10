import React, { Component } from 'react';
import questionIndexData from '../questionsIndexData';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questionIndexData
    }
    console.log('Component initialized')
  }

  deleteQuestion(id) {
    // anytime you want to change state you must use this.setState
    this.setState((state) => { // the cb function always recieves the latest state as the argument
      // return value of this cb function is merged into the state
      return {
        questions: state.questions.filter(q => q.id !== id)
      }
    })
  }

  render() {
    console.log('Question Index Page Rendered')
    return(
      <main>
        {this.state.questions.map(q => {
          return(
            <div key={q.id}>
              <h1>{q.id} - {q.title}</h1>
              <button onClick={() => this.deleteQuestion(q.id)}>Delete</button>
            </div>
          )
        })}
      </main>
    )
  }
}

export default QuestionIndexPage