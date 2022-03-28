import React, {useCallback, useState} from 'react';

import {FlatList, View} from 'react-native';
import JWText from '../JWText';
import PictureCard from '../PictureCard';
import styles from './styles';

type PicturesProps = {
  pictures: any[];
  title: string;
};

const Pictures = ({pictures, title}: PicturesProps) => {
  const renderItem = useCallback(
    ({item}) => <PictureCard src={item.Poster} id={item.id} />,
    [pictures],
  );

  const renderItemSeparator = useCallback(
    () => <View style={styles.itemSeparator} />,
    [],
  );

  return (
    <>
      <JWText type="header" style={styles.header}>
        {title}
      </JWText>
      <FlatList
        style={styles.pictureListContainer}
        data={pictures}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderItemSeparator}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </>
  );
};

export default Pictures;
