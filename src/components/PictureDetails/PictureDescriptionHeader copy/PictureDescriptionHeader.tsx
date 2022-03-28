import {View} from 'react-native';
import React from 'react';
import JWText from 'src/components/JWText';

type PictureDescriptionHeader = {
  title: string;
  duration: string;
  rated: string;
  releaseDate: string;
};

const PictureDescriptionHeader = ({
  title,
  duration = '',
  rated = '',
  releaseDate = '',
}: PictureDescriptionHeader) => {
  const [, , year] = releaseDate.split(' ');
  return (
    <View>
      <JWText type="header">{title}</JWText>
      <JWText style={{marginVertical: 20}}>
        {year} | {duration} | {rated}
      </JWText>
    </View>
  );
};

export default PictureDescriptionHeader;
