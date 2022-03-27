import DeviceUiInfo from 'src/config/device';

const fontSize = {
  medium: DeviceUiInfo.moderateScale(54),
  large: DeviceUiInfo.moderateScale(40),
} as const;

const fontFamily = {
  textRegular: 'Urbanist-Regular',
  textBold: 'Urbanist-Bold',
} as const;

const fonts = {
  fontFamily,
  fontSize,
} as const;

export type FontsFamilies = keyof typeof fontFamily;

export default fonts;