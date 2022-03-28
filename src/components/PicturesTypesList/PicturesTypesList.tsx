import React, {useCallback} from 'react';

import {FlatList, View} from 'react-native';
import PictureDetails from '../PictureDetails';
import Pictures from '../Pictures/Pictures';
import styles from './styles';

type PicturesProps = {
  categories?: any[];
};

const PicturesTypesList = ({categories = []}: PicturesProps) => {
  const renderItem = useCallback(
    ({item}) => <Pictures pictures={item.pictures} title={item.category} />,
    [],
  );

  return (
    <FlatList
      style={styles.pictureListContainer}
      data={categories}
      keyExtractor={item => item.category}
      renderItem={renderItem}
    />
  );
};

export default PicturesTypesList;
