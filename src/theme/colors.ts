const colors = {
  primary: '#FBC500',
  backGround: '#0D0D0F',
  cardBG: '#1A1A1B',
  placeholder: '#75787D',
  white: '#FFF',
} as const;

export type ColorName = keyof typeof colors;

export default colors;
