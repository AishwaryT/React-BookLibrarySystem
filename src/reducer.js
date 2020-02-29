function addReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "FORMSUBMIT":
      return [...state, { book: action.book }];
    default:
      return state;
  }
}

export default addReducer;
