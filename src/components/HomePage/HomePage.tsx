import React from 'react';
import PicturesTypesList from '../PicturesTypesList';
import {usePicturesStore} from '../PicturesContext/PicturesContext';
import styles from './styles';
import {View} from 'react-native';

const HomePage = () => {
  const picturesStore = usePicturesStore();

  const categoriesWithPictures = picturesStore?.categories.map(category => ({
    category,
    pictures: picturesStore?.pictures.filter(
      picture => picture.Type === category,
    ),
  }));

  return (
    <View style={styles.homePageContainer}>
      <PicturesTypesList categories={categoriesWithPictures} />
    </View>
  );
};

export default HomePage;
