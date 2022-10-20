
import Card from "./Reuse/Card"
import FeedbackButton from "./Reuse/FeedbackButton";
import FeedbackRating from "./FeedbackRating";
import {useState} from 'react'

function FeedbackForm({handleAdd}) {

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10)

  const handleForm = (e) => {
    if(text === '' ){
      setBtnDisabled(true);
      setMessage(null);
    }else if(text !== '' && text.trim().length <= 10){
      setMessage('Text atleast 10 characters..');
      setBtnDisabled(true);

    }else{
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length >= 10){
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback);
      setText('');
    }
  }
  return (
    <Card>
        <form onSubmit={handleFormSubmit}>
            <div>
            <h2>How would you rate your service with us ?</h2>
            <FeedbackRating select={(rating) => setRating(rating)}/>
            <div className="input-group">
            <input type='text' onChange={handleForm} placeholder="enter your comment.." value={text}></input>
            <FeedbackButton type='submit' 
            // version='primary' 
            isDisabled={btnDisabled}
            >Send</FeedbackButton>
            </div>
            {message && <div className="message">{message}</div>}
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm