import {SET_FEATURES, ADD_SENTENCE, DELETE_SENTENCE} from './actions';

const initialState = {
  features: [],
  events: [],
  sentences: [],
  contexts: [],
};

export default function speechTree(state = initialState, action) {
  switch (action.type) {
    case SET_FEATURES:
      return action.payload;
    case ADD_SENTENCE:
      return {...state, sentences: [...state.sentences, action.payload]};
    case DELETE_SENTENCE:
      return state;
    default:
      return state;
  }
}
