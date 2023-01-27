import React, {useState} from 'react'

function FeedbackItem({item}) {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of a feedback item');

    // Exemplo de evento, para uso com o botão criado abaixo:
    // const handleClick = () => {
    //     //setRating(10);
    //     setRating( (prev) => {
    //         return prev + 1;
    //     } );
    // }

    return (
    <div className='card'>
        <div className="num-display">{ item.rating }</div>
        <div className="text-display">{ item.text }</div>
        {/* <button onClick={handleClick}>Click me !</button> */}
    </div>
    )
}

export default FeedbackItem