import {StyleSheet} from 'react-native';
import DeviceUiInfo from 'src/config/device';
import colors from 'src/theme/colors';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: DeviceUiInfo.scale(120),
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: colors.backGround,
    position: 'absolute',
  },
  playButton: {height: 50, width: 100},
});
export default styles;
