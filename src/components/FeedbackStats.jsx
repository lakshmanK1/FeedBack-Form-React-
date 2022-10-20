import PropTypes from 'prop-types' 
function FeedbackStats({feedback}) {
    let averageRating = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    },0)/feedback.length;
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating :{isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  )
}
FeedbackStats.propTypes = {
    feedback : PropTypes.array.isRequired,
}
export default FeedbackStats