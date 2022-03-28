import React, {useCallback} from 'react';

import {FlatList} from 'react-native';
import Header from '../Header';
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
  const renderHeader = () => <Header />;

  return (
    <FlatList
      style={styles.pictureListContainer}
      data={categories}
      ListHeaderComponent={renderHeader}
      keyExtractor={item => item.category}
      renderItem={renderItem}
    />
  );
};

export default PicturesTypesList;
