import propTypes from 'prop-types'
function FeedbackButton({children, type, version, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}
FeedbackButton.defaultProps = {
    version: 'primary',
    type : 'button',
    isDisabled : false,
}

FeedbackButton.propTypes = {
    children : propTypes.node.isRequired,
    type : propTypes.string,
    version : propTypes.string,
    isDisabled : propTypes.bool,
}

export default FeedbackButton