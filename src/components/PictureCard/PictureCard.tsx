import React from 'react';
import {observer} from 'mobx-react-lite';

import {ImageBackground, TouchableHighlight} from 'react-native';
import styles from './styles';
import {usePicturesStore} from '../PicturesContext/PicturesContext';

type PictureCardProps = {
  src: string;
  id: string;
};

const PictureCard = observer(({src, id}: PictureCardProps) => {
  const picturesStore = usePicturesStore();
  const {focusedPictureId, setFocusedPicture, setSelectedPicture} =
    picturesStore || {};
  const isFocused = focusedPictureId === id;
  const style = styles({isFocused});

  const handleFocus = () => setFocusedPicture?.(id);

  const handleSelection = () => {
    setSelectedPicture?.(id);
  };

  return (
    <TouchableHighlight onFocus={handleFocus} onPress={handleSelection}>
      <ImageBackground
        borderRadius={20}
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
