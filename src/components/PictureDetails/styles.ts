import {StyleSheet} from 'react-native';
import DeviceUiInfo from 'src/config/device';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  detailsContainer: {
    width: DeviceUiInfo.screenSize.width * 0.9,
    padding: 20,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: colors.cardBG,
  },
});
export default styles;
