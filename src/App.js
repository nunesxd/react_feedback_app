import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import AboutIconLink from './components/AboutIconLink';
//import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext';


function App() {
    const [feedback, setFeedback] = useState( FeedbackData );

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want do delete this item ?')) {
            setFeedback(feedback.filter( (item) => item.id !== id ));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    return (
        <FeedbackProvider>
            <Router>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <Header text="Prop text testing..." />
                            <div className='container'>
                                <FeedbackForm handleAdd={ addFeedback }/>
                                <FeedbackStats feedback={ feedback } />
                                <FeedbackList feedback={ feedback } handleDelete={ deleteFeedback } />
                            </div>

                            <AboutIconLink />
                        </>
                    } />
                    
                    <Route path='/about' element={ 
                        <>
                            <AboutPage />
                        </>
                    } />

                </Routes>
            </Router>
        </FeedbackProvider>
    )
}

export default App