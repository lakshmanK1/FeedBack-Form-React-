import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css';
import Header from './components/Header';

import FeedbackData from './Data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {

  const [Feedback, setFeedback] = useState(FeedbackData);

  const addFormData = (newFormData) => {
    newFormData.id = uuidv4()
    setFeedback([newFormData,...Feedback])
  }

  const deleteListItem = (id) => {
    if(window.confirm('Are you sure, want to delete ?')){
      setFeedback(Feedback.filter((item) => item.id !== id ));
    }
  }

  return (
    <div>
      <Header text={"Hi iam App.js"}/>
      <div className='container'>
      <FeedbackForm handleAdd={addFormData}/>
      <FeedbackStats feedback={Feedback}/>
      <FeedbackList Feedback={Feedback} handleDelete={deleteListItem}/>
      </div>
    </div>
  );
}

export default App;
