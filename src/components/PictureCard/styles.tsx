import {StyleSheet} from 'react-native';
import DeviceUiInfo from 'src/config/device';
import colors from 'src/theme/colors';

type StyleProps = {
  isFocused: boolean;
};

const styles = ({isFocused}: StyleProps) =>
  StyleSheet.create({
    cardContainer: {
      aspectRatio: 0.7,
      borderWidth: isFocused ? 3 : 0,
      borderColor: colors.white,
      borderRadius: 23,
      overflow: 'hidden',
      width: DeviceUiInfo.scale(50),
    },
  });

export default styles;
