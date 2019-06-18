import {schema} from 'normalizr';

const sentence = new schema.Entity(
  'sentences',
  {},
  {
    idAttribute: 'sentence_id',
    processStrategy: (value, parent, key) => ({...value,parent: parent.event_id}),
  },
);

const event = new schema.Entity(
  'events',
  {
    sentences: [sentence],
  },
  {
    idAttribute: 'event_id',
    processStrategy: (value, parent, key) => ({...value, parent: parent.context_id}),
  },
);

const context = new schema.Entity(
  'contexts',
  {
    events: [event],
  },
  {
    idAttribute: 'context_id',
    processStrategy: (value, parent, key) => ({...value, parent: parent.feature_id}),
  },
);

export const feature = new schema.Entity(
  'features',
  {
    contexts: [context],
  },
  {idAttribute: 'feature_id'},
);

export const featuresListSchema = [feature];
