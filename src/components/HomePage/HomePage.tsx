import React from 'react';
import PicturesTypesList from '../PicturesTypesList';
import {usePicturesStore} from '../PicturesContext/PicturesContext';

const HomePage = () => {
  const picturesStore = usePicturesStore();

  const categoriesWithPictures = picturesStore?.categories.map(category => ({
    category,
    pictures: picturesStore?.pictures.filter(
      picture => picture.Type === category,
    ),
  }));

  return <PicturesTypesList categories={categoriesWithPictures} />;
};

export default HomePage;
