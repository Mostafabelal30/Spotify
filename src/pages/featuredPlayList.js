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
import {getPlayList} from '../action';
import {verticalScale, moderateScale, width} from '../utils/device-scaling';
import Container from '../components/Container';

class FeaturedPlayList extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);

    this.state = {};
  }

  componentDidMount() {
    const {featuredPlayListPage} = this.props;

    this.props.getPlayList(featuredPlayListPage);
  }
  onEndReached() {
    const {featuredPlayListPage} = this.props;
    this.props.getPlayList(featuredPlayListPage);
  }
  renderItem({item}) {
    console.log('itemitemitem', item);
    const {radioTextStyle, contentContainerStyle, moreIconStyle} = styles;

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('PlayListTracks', item)}
        activeOpacity={0.7}>
        <View style={contentContainerStyle}>
          <Image source={{uri: item.images[0].url}} style={[moreIconStyle]} />
          <View>
            <Text style={radioTextStyle}>{item.name}</Text>
            <Text style={radioTextStyle}>{item.owner.display_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {} = styles;

    const {featuredPlayList, featuredPlayListPage} = this.props;
    return (
      <Container>
        <FlatList
          style={{flex: 1, width: width * 0.9}}
          data={featuredPlayList}
          onEndReachedThreshold={0.5}
          onEndReached={this.onEndReached}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: width * 0.9,
    marginVertical: width * 0.01,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  radioTextStyle: {
    color: '#000',
    fontSize: moderateScale(30),
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  moreIconStyle: {
    width: width * 0.2,
    height: width * 0.2,
    marginHorizontal: width * 0.03,
  },
});

const mapStateToProps = ({playList}) => {
  const {featuredPlayList, featuredPlayListPage} = playList;
  return {
    featuredPlayList,
    featuredPlayListPage,
  };
};

export default connect(
  mapStateToProps,
  {
    getPlayList,
  },
)(FeaturedPlayList);
