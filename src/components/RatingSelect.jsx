import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext'


function RatingSelect({ select }) {
    const [selected, setSelected] = useState( 10 );

    const { feedbackEdit } = useContext(FeedbackContext);

    useEffect(() => {
      // Verifica se clicamos em algum item para edição, caso não, carrega apenas a página.
      if(feedbackEdit.edit === true) {
          setSelected(feedbackEdit.item.rating);
      }
    }, [feedbackEdit]);

    const handleChange = (event) => {
        setSelected(+event.target.value);
        select(+event.target.value);
    }

    return (
        <ul className='rating'>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onChange={handleChange}
                checked={selected === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
      )
}

export default RatingSelect