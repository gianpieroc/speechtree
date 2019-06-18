import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import List from '../../components/List';
import Events from '../Events';

class Contexts extends Component {
  render() {
    const {contexts, location} = this.props;
    const featureId = location.state.feature
      ? location.state.feature.feature_id
      : '';
    const path = `/${featureId}/contexts/:context_id/events`;

    console.log(contexts)
    console.log(featureId)
    const contextsFiltered = Object.values(contexts).filter(
      context => context.parent === featureId,
    );

    if (!contexts || !Object.keys(contexts).length) {
      return <h1>No contexts</h1>;
    }

    return (
      <React.Fragment>
        <List
          style={{backgroundColor: '#2C365E'}}
          path={path}
          state={location.state}
          items={contextsFiltered}
          name="context"
          itemId="context_id"
        />
        <Route path={path} component={Events} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contexts: state.speech.contexts,
});

export default connect(mapStateToProps)(Contexts);
