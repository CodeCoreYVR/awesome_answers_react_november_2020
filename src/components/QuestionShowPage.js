import React from 'react'
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';

const QuestionShowPage = () => {
  return(
    <main>
      <QuestionDetails
        title="What is your favourite color"
        body="red, green, blue, ect"
        author={ { full_name: 'Jon Snow' } }
        view_count={35}
        created_at={new Date()}
        updated_at={new Date()}
      />
      <AnswerList
        answers={[
          {
            body: 'blue',
            author: {
              full_name: 'steve jobs'
            },
            created_at: new Date()
          },
          {
            body: 'red',
            author: {
              full_name: 'elon'
            },
            created_at: new Date()
          },
          {
            body: 'green',
            author: {
              full_name: 'bill'
            },
            created_at: new Date()
          },
        ]}
      />
    </main>
  )
}

export default QuestionShowPage
