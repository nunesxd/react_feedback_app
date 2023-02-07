import { useContext, React } from 'react'
import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'


// Função antiga, quando passavamos os argumentos por 'props':
// function FeedbackList({feedback, handleDelete}) {
function FeedbackList({handleDelete}) {
    const {feedback} = useContext(FeedbackContext);
    
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback received</p>
    }

    return (
        <div className='feedback-list'>
            {feedback.map( (item) => (
                <FeedbackItem key={item.key} item={item} handleDelete={ handleDelete } />
            ) )}
        </div>
    )
}

// Não é mais necessário, visto que agora estamos usando o conceito de 'context':
// FeedbackList.propTypes = {
//     // feedback: PropTypes.array,
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired
//         })
//     ),
//   }

export default FeedbackList