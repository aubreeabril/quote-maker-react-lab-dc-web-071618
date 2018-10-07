export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "UPVOTE_QUOTE":
      console.log(state, action);
      let quoteToVote = state.find(quote => quote.id === action.quoteId);
      let index = state.indexOf(quoteToVote);
      let updatedQuote = {
        ...quoteToVote,
        votes: (quoteToVote.votes += 1)
      };
      let updatedState = [...state];
      updatedState[index] = updatedQuote;
      return updatedState;
    case "DOWNVOTE_QUOTE":
      let quoteToDownvote = state.find(quote => quote.id === action.quoteId);
      if (quoteToDownvote.votes > 0) {
        let downvoteIndex = state.indexOf(quoteToDownvote);
        let downvotedQuote = {
          ...quoteToDownvote,
          votes: quoteToDownvote.votes - 1
        };
        let downvotedState = [...state];
        downvotedState[downvoteIndex] = downvotedQuote;
        return downvotedState;
      } else {
        return state;
      }
    case "REMOVE_QUOTE":
      let newState = state.filter(quote => quote.id !== action.quoteId);
      return newState;
    default:
      return state;
  }
  return state;
};
