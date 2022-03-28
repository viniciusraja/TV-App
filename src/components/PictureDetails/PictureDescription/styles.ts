import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  dot: {
    height: 7,
    borderRadius: 5,
    aspectRatio: 1,
    backgroundColor: colors.primary,
  },
  genresContainer: {marginVertical: 20},
  dotContainer: {
    height: 35,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  description: {
    flexWrap: 'wrap',
    flexShrink: 1,
    marginRight: 300,
    textAlign: 'justify',
  },
});

export default styles;
