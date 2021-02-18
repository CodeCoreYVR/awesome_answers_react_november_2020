import React, {useState} from 'react';
import {Question} from '../requests';

const NewQuestionForm = (props)=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            title: formData.get('title'),
            body: formData.get('body')
        }
        createQuestion(params);
        event.currentTarget.reset();
    }
    function createQuestion(params){
        Question.create(params)
        .then((question)=>{
            if(question.id){
                const id = question.id;
                props.history.push(`/questions/${id}`)
            }
        })
    }

    return(
        <div>
            <h1>New Question</h1>
            <form onSubmit={event=>handleSubmit(event)}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input name='title' id='title' value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='body'>Body: </label>
                    <textarea name='body' id='body' cols='60' rows='5' value={body} onChange={e=>setBody(e.target.value)} />
                </div>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}
export default NewQuestionForm;