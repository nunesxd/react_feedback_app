import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback received</p>
    }

    return (
        <div className='feedback-list'>
            {feedback.map( (item) => (
                <FeedbackItem key={item.key} item={item} />
            ) )}
        </div>
    )
}

FeedbackList.propTypes = {
    // feedback: PropTypes.array,
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ),
  }

export default FeedbackList