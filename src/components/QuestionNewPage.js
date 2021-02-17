import React, { Component } from 'react'
import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests';

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newQuestionData: {
        title: '',
        body: '',
      }
    }
    this.createQuestion = this.createQuestion.bind(this)
    this.updateQuestionData = this.updateQuestionData.bind(this)
  }

  createQuestion(params) {
    Question.create(params)
      .then(({ id }) => {
        this.props.history.push(`/questions/${id}`)
      })
  }

  updateQuestionData(props) { // props will be an object { title: 'new value' } | { body: 'new value for body' }
    this.setState((state) => {
      console.log(props);
      console.log(state);
      // return {
      //   newQuestionData: {
      //     ...state.newQuestionData,
      //     ...props
      //   }
      // }
      return {
        newQuestionData: Object.assign(Object.assign({}, state.newQuestionData), props)
      }
    })
  }

  render() {
    return(
      <main>
        <NewQuestionForm 
          createQuestion={this.createQuestion} 
          newQuestionData={this.state.newQuestionData}
          updateQuestionData={this.updateQuestionData}
        />
      </main>
    )
  }
}

export default QuestionNewPage