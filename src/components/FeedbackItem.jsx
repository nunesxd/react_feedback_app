import { useContext, React } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'


// Função antiga, quando passavamos os argumentos por 'props':
//function FeedbackItem({item, handleDelete}) {
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

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return (
    <Card>
        <div className="num-display">{ item.rating }</div>
        <button onClick={() => deleteFeedback(item.id) } className="close">
            <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(item) } className="edit">
            <FaEdit color='purple' />
        </button>
        <div className="text-display">{ item.text }</div>
        {/* <button onClick={handleClick}>Click me !</button> */}
    </Card>
    )

    // Return antigo, quando passamos os parâmetros por props:
    // return (
    //     <Card>
    //         <div className="num-display">{ item.rating }</div>
    //         <button onClick={() => handleDelete(item.id) } className="close">
    //             <FaTimes color='purple' />
    //         </button>
    //         <div className="text-display">{ item.text }</div>
    //         {/* <button onClick={handleClick}>Click me !</button> */}
    //     </Card>
    //     )
}

FeedbackItem.propTypes = {
    children: PropTypes.object.isRequired,
  }

export default FeedbackItem