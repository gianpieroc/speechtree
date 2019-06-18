import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import List from '../../components/List';
import Sentences from '../Sentences';

class Event extends Component {
  render() {
    const {events, location} = this.props;
    console.log(location);
    const featureId = location.state.feature
      ? location.state.feature.feature_id
      : '';
    const contextId = location.state.context
      ? location.state.context.context_id
      : '';
    const path = `/${featureId}/contexts/${contextId}/events/:event_id/sentences/`;

    const eventsFiltered = Object.values(events).filter(
      event => event.parent === location.state.context.context_id,
    );

    if (!events || !Object.keys(events).length) {
      return <h1>No events</h1>;
    }

    return (
      <React.Fragment>
        <List
          style={{backgroundColor: '#444B6E'}}
          path={path}
          name="event"
          items={eventsFiltered}
          itemId="event_id"
          state={location.state}
        />
        <Route path={path} component={Sentences} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.speech.events,
});

export default connect(mapStateToProps)(Event);
