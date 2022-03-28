import {View, FlatList, Image} from 'react-native';
import React from 'react';
import {Picture} from 'src/stores/PictureStores';
import JWText from 'src/components/JWText';
import styles from './styles';
import PictureDescriptionHeader from '../PictureDescriptionHeader';
import PictureDescriptionFooter from '../PictureDescriptionFooter';

type PictureDescriptionProps = {
  selectedPicture: Picture;
};

const PictureDescription = ({selectedPicture}: PictureDescriptionProps) => {
  const {
    Plot,
    Genre,
    Title,
    Runtime,
    Released,
    Rated,
    imdbRating,
    platformLogo,
  } = selectedPicture;

  const renderItem = ({item}: {item: string}) => <JWText>{item}</JWText>;

  const renderItemSeparator = () => (
    <View style={styles.dotContainer}>
      <View style={styles.dot} />
    </View>
  );

  return (
    <View style={styles.container}>
      <PictureDescriptionHeader
        title={Title}
        duration={Runtime}
        releaseDate={Released}
        rated={Rated}
      />
      <View style={styles.descriptionContainer}>
        <JWText style={styles.description}>{Plot || ''}</JWText>
        <View style={styles.divider} />
        <Image
          source={{uri: platformLogo}}
          resizeMode="cover"
          style={styles.platformLogo}
        />
      </View>
      <FlatList
        horizontal
        data={Genre?.split(',') || []}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        contentContainerStyle={styles.genresContainer}
      />
      <PictureDescriptionFooter imdbRating={imdbRating} />
    </View>
  );
};

export default PictureDescription;
