import {Platform, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class DeviceUiInfo {
  static platform = Platform.OS;
  static screenSize = {width, height};
  static screenSizeWithPixelRatio = {
    width: width * PixelRatio.get(),
    height: height * PixelRatio.get(),
  };
  static guidelineBaseWidth = 350;
  static guidelineBaseHeight = 680;

  static fontScale = PixelRatio.getFontScale();

  static scale(size: number) {
    return (this.screenSize.width / this.guidelineBaseWidth) * size;
  }
  static verticalScale(size: number) {
    return (this.screenSize.height / this.guidelineBaseHeight) * size;
  }
  static moderateScale(size: number, factor = 0.25) {
    return size + (this.scale(size) - size) * factor;
  }
}
