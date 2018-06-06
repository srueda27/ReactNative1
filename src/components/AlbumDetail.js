import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumProp }) => {
  const { title, artist, thumbnail_image, image } = albumProp;
  const { headerTextContentStyle,
          thumbnailStyle,
          thumnailContainerStyle,
          titleTextStyle,
          imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerTextContentStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerTextContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
