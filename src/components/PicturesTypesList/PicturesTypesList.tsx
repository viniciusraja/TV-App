import React, {useCallback} from 'react';

import {FlatList, View} from 'react-native';
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
  const renderItemSeparator = useCallback(
    () => <View style={styles.itemSeparator} />,
    [],
  );

  console.log(categories);

  return (
    <FlatList
      style={styles.pictureListContainer}
      data={categories}
      keyExtractor={item => item.category}
      renderItem={renderItem}
      ItemSeparatorComponent={renderItemSeparator}
    />
  );
};

export default PicturesTypesList;
