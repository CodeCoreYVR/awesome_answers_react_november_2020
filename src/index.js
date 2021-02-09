import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const QuestionDetails = () => {
  return (
    <div>
      <h2>What is your favourite colour?</h2>
      <p>Green, Blue, Magenta, ect.</p>
      <p>By Jon Snow</p>
      <p>
        <small>Seen 10 times</small>
        <small>Last edited 2 hours</small>
      </p>
    </div>
  )
}

const AnswerDetails = () => {
  return (
    <div>
      <p>This is my answer</p>
      <p>By Steve Jobs</p>
      <p>
        <strong>Created at:</strong> 1 day ago
      </p>
    </div>
  )
}

const QuestionShowPage = () => {
  return(
    <main>
      <QuestionDetails/>
      <AnswerDetails />
    </main>
  )
}

// React.StrictMode is a development only component will give you hints about the compoents that ou write
ReactDOM.render(
  <QuestionShowPage />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
