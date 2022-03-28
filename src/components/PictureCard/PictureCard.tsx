import {observable} from 'mobx';
import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';

import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';
import DeviceUiInfo from 'src/config/device';
import {PictureStoreContext} from 'src/stores/PictureStores';
import colors from 'src/theme/colors';
import JWText from '../JWText';
import styles from './styles';
import {usePicturesStore} from '../PicturesContext/PicturesContext';

type PictureCardProps = {
  src: string;
  id: string;
};

const PictureCard = observer(({src, id}: PictureCardProps) => {
  const picturesStore = usePicturesStore();
  const {focusedPictureId, setFocusedPicture} = picturesStore || {};
  const isFocused = focusedPictureId === id;
  const style = styles({isFocused});
  const handleFocus = () => setFocusedPicture?.(id);

  return (
    <TouchableHighlight onFocus={handleFocus}>
      <ImageBackground
        borderRadius={40}
        source={{
          uri:
            src ||
            'https://upload.wikimedia.org/wikipedia/commons/e/e1/JustWatch.png',
        }}
        style={style.cardContainer}
      />
    </TouchableHighlight>
  );
});

export default PictureCard;
