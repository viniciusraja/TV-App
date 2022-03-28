import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import PictureImagePlayer from './PictureImagePlayer';
import {usePicturesStore} from '../PicturesContext/PicturesContext';
import {observer} from 'mobx-react-lite';
import PictureDescription from './PictureDescription/PictureDescription';

type PictureDetailsProps = {section: string};

const PictureDetails = observer(({section}: PictureDetailsProps) => {
  const picturesStore = usePicturesStore();
  const {selectedPicture} = picturesStore || {};
  const showPictureDetails = section === selectedPicture?.Type;

  return showPictureDetails ? (
    <View style={styles.detailsContainer}>
      {selectedPicture?.Images && (
        <PictureImagePlayer src={selectedPicture?.Images?.[0]} />
      )}
      <PictureDescription {...{selectedPicture}} />
    </View>
  ) : null;
});

export default PictureDetails;
