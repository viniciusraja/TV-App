import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {ColorName} from 'src/theme/colors';
import {FontsFamilies} from 'src/theme/fonts';

import Styles from './styles';

interface JWTextProps extends Omit<TextProps, 'style'> {
  color?: ColorName;
  type?: 'header' | 'body-medium';
  font?: FontsFamilies;
  style?: TextStyle;
}

const JWText: React.FC<JWTextProps> = ({
  type = 'body-medium',
  color = 'white',
  children,
  font = 'textRegular',
  style = {},
  ...props
}) => {
  const JWStyles = Styles({fontFamily: font, type, color, style});
  return (
    <Text style={JWStyles.text} accessibilityRole="text" {...props}>
      {children}
    </Text>
  );
};

export default JWText;
