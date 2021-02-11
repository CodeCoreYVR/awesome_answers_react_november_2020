import React, { Component } from 'react'
import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests';

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);
    this.createQuestion = this.createQuestion.bind(this)
  }

  createQuestion(params) {
    Question.create(params)
      .then(({ id }) => {
        this.props.history.push(`/questions/${id}`)
      })
  }

  render() {
    return(
      <main>
        <NewQuestionForm createQuestion={this.createQuestion} />
      </main>
    )
  }
}

export default QuestionNewPage