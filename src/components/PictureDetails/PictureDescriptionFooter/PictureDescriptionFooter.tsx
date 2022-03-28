import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import JWText from 'src/components/JWText';
import ImdbLogo from 'src/assets/images/imdbLogo.png';
import styles from './styles';

type PictureDescriptionFooter = {
  imdbRating: string;
};

const PictureDescriptionFooter = ({
  imdbRating = '',
}: PictureDescriptionFooter) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.ratingContainer}>
        <Image source={ImdbLogo} />
        <JWText> {imdbRating}/10</JWText>
      </View>
      <TouchableOpacity style={styles.button}>
        <JWText color="backGround"> Watch Now</JWText>
      </TouchableOpacity>
    </View>
  );
};

export default PictureDescriptionFooter;
