import React, { useState } from 'react';
import Header from './components/Header';
//import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';


function App() {
    const [feedback, setFeedback] = useState( FeedbackData );

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want do delete this item ?')) {
            setFeedback(feedback.filter( (item) => item.id !== id ));
        }
    }

    return (
        <>
            <Header text="Prop text testing..." />
            <div className='container'>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={ deleteFeedback } />
            </div>
        </>
    )
}

export default App