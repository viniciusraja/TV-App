import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import PlayButton from 'src/assets/images/play-button.png';

type PictureImagePlayerProps = {
  src: string;
};
const PictureImagePlayer = ({src}: PictureImagePlayerProps) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={{uri: src}}
        borderRadius={20}
        resizeMode="cover"
        style={styles.imageContainer}>
        <View style={styles.backdrop} />
        <Image
          style={styles.playButton}
          resizeMode="contain"
          source={PlayButton}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PictureImagePlayer;
