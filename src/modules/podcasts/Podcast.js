import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-native';
import {
  Text,
  ScrollView,
  View,
  Image,
  WebView,
} from 'react-native';
import styles from '../articles/ArticleStyles';
import { contentActions } from '../../actions';
import Loading from '../shared/Loading';
import Unavailable from '../shared/Unavailable';
import References from '../shared/References';
import { creatorTitles } from '../../constants';


class Podcast extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContent(this.props.match.params.id);
  }

  render() {
    if (this.props.isGettingContent) {
      return (
        <Loading />
      );
    }

    if (!this.props.content) {
      return (
        <Unavailable message='Podcast unavailable' />
      );
    }

    return (
      <ScrollView>
        <View style={styles.image}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: this.props.content.url}}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.titleText}>
            {this.props.content.title}
          </Text>
          <View style={styles.metaData}>
            <View style={[styles.rightBorder, styles.metaDataBox]}>
              <Text>{creatorTitles[this.props.content.type].toUpperCase()}</Text>
              {/* <Text style={styles.blue}>{this.props.content.creators[0]}</Text> */}
            </View>
            <View style={[styles.rightBorder, styles.metaDataBox]}>
              <Text>ARTIST</Text>
              {/* <Text style={styles.blue}>{this.props.content.creators[0]}</Text> */}
            </View>
            <View style={[styles.metaDataBox]}>
              <Text>{new Date(this.props.content.publishTime).toLocaleDateString()}</Text>
            </View>
          </View>
          <Text>{this.props.content.body}</Text>
          {this.props.content.references && <References references={this.props.content.references} />}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContent: contentActions.getContent,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Podcast);
