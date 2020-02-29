import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getTracks} from '../action';
import {verticalScale, moderateScale, width} from '../utils/device-scaling';
import Container from '../components/Container';

class PlayListTracks extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);

    this.state = {};
  }

  componentDidMount() {
    console.log(
      'this.props.navigation.state.paramsthis.props.navigation.state.params',
      this.props.navigation.state.params,
    );

    let id = this.props.navigation.state.params.id;

    this.props.getTracks(id);
  }

  renderItem({item}) {
    console.log('itemitemitem', item);

    const {radioTextStyle, contentContainerStyle} = styles;

    return (
      <View style={contentContainerStyle}>
        <Text style={radioTextStyle}>{item.track.name}</Text>
        <Text style={radioTextStyle}>{item.track.artists[0].type}</Text>
      </View>
    );
  }

  render() {
    const {} = styles;

    const {trackList} = this.props;
    return (
      <Container>
        <FlatList data={trackList} renderItem={this.renderItem} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: width * 0.9,
    marginVertical: width * 0.01,
    backgroundColor: '#fff',
  },
  radioTextStyle: {
    color: '#000',
    fontSize: moderateScale(30),
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
});

const mapStateToProps = ({playList}) => {
  const {trackList} = playList;
  return {
    trackList,
  };
};

export default connect(
  mapStateToProps,
  {
    getTracks,
  },
)(PlayListTracks);
