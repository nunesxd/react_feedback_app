import React, { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext'


// Função antiga, quando passavamos os argumentos por 'props':
// function FeedbackForm({ handleAdd }) {
function FeedbackForm() {
    const [text, setText] = useState( '' );
    const [rating, setRating] = useState( 10 );
    const [btnDisabled, setBtnDisabled] = useState( true );
    const [message, setMessage] = useState( '' );

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        // Verifica se clicamos em algum item para edição, caso não, carrega apenas a página.
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc');
    };

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

    const handleSubmit = (event) => {
        event.preventDefault();

        if(text.trim().length > 10) {
            // Não é necessário explicitar os valores dos atributos do objeto, uma vez que o nome destes são iguais as das variáveis.
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true) {
                // Já que criamos um objeto com os novos valores, também podemos utilizá-lo para atualizar os valores de um feedback sendo editado.
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            // Reset do campo texto:
            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
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