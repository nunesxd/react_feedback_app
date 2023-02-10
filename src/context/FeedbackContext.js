import { createContext, useState, useEffect, React } from "react"
// import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState(
    {
      item: {},
      edit: false
    }
  );

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Obtem os dados de nosso back-end 'JSON Server':
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = async (id) => {
    if(window.confirm('Are you sure you want do delete this item ?')) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter( (item) => item.id !== id ));
    }
  }

  const addFeedback = async (newFeedback) => {
    // Processo antigo, realizado no lado do cliente, agora iremos fazer pelo banco JSON:
    // newFeedback.id = uuidv4();

    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify( newFeedback )
    });

    const data = await response.json();

    // setFeedback([newFeedback, ...feedback]);
    setFeedback([data, ...feedback]);
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify( updItem )
    });

    const data = await response.json();

    // setFeedback(feedback.map( (item) => (item.id === id ? { ...item, ...updItem } : item) ));
    setFeedback(feedback.map( (item) => (item.id === id ? { ...item, ...data } : item) ));
  };

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    { children }
  </FeedbackContext.Provider>
};

export default FeedbackContext;