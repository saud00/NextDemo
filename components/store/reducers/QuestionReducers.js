
const initialState = {
    Qs:[
    
    {
        id:1,
        title:'your thought',
        question:'What are the features of React?'
      },
      {
        id:3,
        title:'todays dream',
        question:'Can web browsers read JSX directly? '
      },
      {
        id:4,
        title:'new dream',
        question:'What is the virtual DOM?'
    },
    
],
    newQs:[]
}
;

const QuestionerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_Q': {
      const credentials = action.credentials;
      console.log(credentials)
      return {
        ...state,
        newQs: [...state.Qs, credentials],
        
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default QuestionerReducer;
