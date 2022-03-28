import {StyleSheet} from 'react-native';
import colors, {ColorName} from 'src/theme/colors';
import fonts, {FontsFamilies} from 'src/theme/fonts';

type JWTextStyles = {
  fontFamily: FontsFamilies;
  color?: ColorName;
  type: 'header' | 'body-medium';
  style: {};
};

const FONT_TYPES = {
  'body-medium': {
    fontFamily: fonts.fontFamily.textRegular,
    fontSize: fonts.fontSize.medium,
    color: colors.white,
  },
  header: {
    fontFamily: fonts.fontFamily.textBold,
    fontSize: fonts.fontSize.large,
    color: colors.white,
  },
};

const styles = ({fontFamily, type, color, style}: JWTextStyles) =>
  StyleSheet.create({
    text: {
      ...FONT_TYPES[type],
      fontFamily: fonts.fontFamily[fontFamily],
      color: color ? colors[color] : undefined,
      ...style,
    },
  });

export default styles;
