import React from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'


function App() {
    return (
        <>
            <Header text="Prop text testing..." />
            <div className='container'>
                <FeedbackItem />
            </div>
        </>
    )
}

export default App