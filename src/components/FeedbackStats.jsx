import { useContext, React } from 'react'
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'


// function FeedbackStats({ feedback }) {
function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);

    // Calculo da média das avaliações:
    let avg = feedback.reduce( (acc, cur) => {
        return acc + cur.rating;
    },0 ) / feedback.length

    // Configurando a média para apenas um decimal:
    avg = avg.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className='feedback-stats'>
            <h4>{ feedback.length } Reviews</h4>
            <h4>Average Rating of: { isNaN(avg) ? 0 : avg }</h4>
        </div>
    )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired
//         })
//     ),
//   }

export default FeedbackStats