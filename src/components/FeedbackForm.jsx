import React, { useState } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
    const [text, setText] = useState( '' );
    const [rating, setRating] = useState( 10 );
    const [btnDisabled, setBtnDisabled] = useState( true );
    const [message, setMessage] = useState( '' );

    const handleTextChange = (event) => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters');            
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(event.target.value);
    };

    return (
        <Card>
            <form>
                <h4>How would you rate this site ?</h4>

                <RatingSelect select={ (rating) => setRating(rating) } />

                <div className="input-group">
                    <input onChange={ handleTextChange } type="text" placeholder='Write a review' value={ text } />
                    <Button type='submit' isDisabled={ btnDisabled }>Send</Button>
                </div>

                { message && <div className="message">{ message }</div> }
            </form>
        </Card>
    )
}

export default FeedbackForm