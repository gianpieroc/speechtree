import speechTree from '../speechTree.json';
import {normalize} from 'normalizr';
import { featuresListSchema } from '../schema.js';

export const SET_FEATURES = 'SET_FEATURES';
export const ADD_SENTENCE = 'ADD_SENTENCE';
export const DELETE_SENTENCE = 'DELETE_SENTENCE';

export const setFeatures = payload => ({
  type: SET_FEATURES,
  payload,
});

export const addSentence = payload => ({
  type: ADD_SENTENCE,
  payload,
});

export const deleteSentence = payload => ({
  type: DELETE_SENTENCE,
  payload,
});

export function getFeaturesList() {
  return  async dispatch => {
    const parsedSpeechTree = await normalize(speechTree, featuresListSchema);
    dispatch(setFeatures(parsedSpeechTree.entities));
  };
}
