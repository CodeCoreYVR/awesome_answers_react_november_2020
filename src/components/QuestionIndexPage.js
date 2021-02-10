import React, { Component } from 'react';
import questionIndexData from '../questionsIndexData';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questionIndexData
    }
  }

  render() {
    return(
      <main>
        {this.state.questions.map(q => {
          return(
            <div>
              <h1>{q.id} - {q.title}</h1>
            </div>
          )
        })}
      </main>
    )
  }
}

export default QuestionIndexPage