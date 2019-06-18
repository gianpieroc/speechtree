import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import List from '../../components/List';
import {getFeaturesList} from '../../redux/actions';
import Contexts from '../Contexts';

class Feature extends PureComponent {
  async componentDidMount() {
    const {getFeaturesList} = this.props;
    await getFeaturesList();
  }

  render() {
    const {features} = this.props;
    const path = '/:feature_id/';

    if (!features || !Object.keys(features).length) {
      return <h1>No features</h1>;
    }

    return (
      <React.Fragment>
        <List
          style={{backgroundColor: '#2B193D'}}
          name="feature"
          path={path}
          itemId="feature_id"
          items={features}
        />
        <Route path="/:feature_id/" component={Contexts} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  features: state.speech.features,
});

const mapDispatchToProps = dispatch => ({
  getFeaturesList: () => dispatch(getFeaturesList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feature);
