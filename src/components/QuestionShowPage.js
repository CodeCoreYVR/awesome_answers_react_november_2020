import React, { Component } from 'react'
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';
import questionData from '../questionData';
class QuestionShowPage extends Component {
  constructor(props) {
    super(props); // if you're using a class component and you want to access `this` then you have to call super(props)
    // if you're using a class component you must call super(props) in the constructor
    this.state = questionData
    this.deleteAnswer = this.deleteAnswer.bind(this)
  }

  deleteAnswer(id) {
    this.setState((state) => {
      return {
        answers: state.answers.filter(a => a.id !== id)
      }
    })
  }

  render() {
    const { title, body, author, view_count, created_at, updated_at, answers } = this.state;
    return(
      <main>
        <QuestionDetails
          title={title}
          body={body}
          author={author}
          view_count={view_count}
          created_at={new Date(created_at)}
          updated_at={new Date(updated_at)}
        />
        <AnswerList
          answers={answers}
          deleteAnswer={this.deleteAnswer}
        />
      </main>
    )
  }
}

export default QuestionShowPage
