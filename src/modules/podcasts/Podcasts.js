import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, Text } from 'react-native';
import ContentFeed from '../shared/ContentFeed';
import { contentActions } from '../../actions/contentActions';
import Loading from '../shared/Loading';
import Unavailable from '../shared/Unavailable';

class Podcasts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContents({ type: 'podcast' });
  }

  render() {
    if (this.props.isGettingContents) {
      return (
        <Loading />
      );
    }

    if (!this.props.contents || this.props.contents.length == 0) {
      return (
        <Unavailable message='No podcasts available' />
      );
    }
    this.props.contents.sort((content1, content2) => {
      return content1.publishTime - content2.publishTime;
    });
    return (
      <ScrollView>
        <ContentFeed 
          list={this.props.contents}
          page='podcasts'
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.content.contents,
  isGettingContents: state.content.isGettingContents,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContents: contentActions.getContents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
