import { useContext, React } from 'react'
import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'


// Função antiga, quando passavamos os argumentos por 'props':
// function FeedbackList({feedback, handleDelete}) {
function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext);
    
    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback received</p>
    }

    return isLoading ? (<Spinner />) : (
            <div className='feedback-list'>
                {feedback.map( (item) => (
                    <FeedbackItem key={item.key} item={item} />
                ) )}
            </div>
            // Com o context gerado, agora iremos realizar os procedimentos de CRUD diretamente pelo item.
            // handleDelete={ handleDelete }
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