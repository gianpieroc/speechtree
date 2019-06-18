import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import List from '../../components/List';
import {addSentence} from '../../redux/actions';
import '../style.css';

class Sentences extends PureComponent {
  state = {
    showInput: false,
  };

  onPressAddSentence = () => {
    const {showInput} = this.state;
    this.setState({showInput: !showInput});
  };

  render() {
    const {sentences, location, addSentence} = this.props;
    const {showInput} = this.state;

    if (!sentences || !Object.keys(sentences).length) {
      return <h1 className="container">No Sentences</h1>;
    }

    return (
      <React.Fragment>
        <Button
          onClick={this.onPressAddSentence}
          showInput={showInput}
          name="Add sentence"
        />
        <List
          hideArrow
          style={{backgroundColor: '#708B75', width: '100%'}}
          state={location.state}
          items={sentences}
          showInput={showInput}
          onSubmit={addSentence}
          name="sentences"
          itemId="sentence_id"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sentences: state.speech.sentences,
});

const mapDispatchToProps = dispatch => ({
  addSentence: () => dispatch(addSentence()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sentences);
