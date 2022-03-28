import React from 'react';
import {Image, View} from 'react-native';
import JustWatchLogo from 'src/assets/images/justWatchLogo.png';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={JustWatchLogo}
        resizeMode="contain"
        style={styles.headerImage}
      />
    </View>
  );
};

export default Header;
