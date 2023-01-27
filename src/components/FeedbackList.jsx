import React from 'react'
import FeedbackItem from './FeedbackItem'

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

export default FeedbackList