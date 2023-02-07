import { createContext, useState, React } from "react"

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'FeedbackContext testing',
      rating: 10
    }
]);


  return <FeedbackContext.Provider value={{
    feedback: feedback
  }}>
    { children }
  </FeedbackContext.Provider>
};

export default FeedbackContext;