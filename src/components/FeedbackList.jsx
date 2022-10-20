import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({Feedback, handleDelete}) {

    if(!Feedback || Feedback.length === 0){
        return <h1>No FeedBack...!</h1>
    }
  return (
    <div className="feedback-list">
      {Feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} 
        handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

FeedbackList.prototype = {
  Feedback : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    })
  )
}



export default FeedbackList