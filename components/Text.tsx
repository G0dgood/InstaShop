import React from 'react';
import { Text as NativeText, TextStyle } from 'react-native';
import { defaultFontSize } from '../style/global';

export interface TextProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small',
  color?: string,
  muted?: boolean,
  size?: number,
  mt?: number,
  mb?: number,
  mr?: number,
  ml?: number,
  mx?: number,
  my?: number,
  bold?: boolean,
  align?: string,
  font?: string,
  style?: TextStyle | TextStyle[] | {},
  children?: React.ReactNode,
}

const Text = ({
  type = 'p',
  color = 'black',
  muted = false,
  size,
  mt = 0,
  mb = 0,
  mr = 0,
  ml = 0,
  mx = 0,
  my = 0,
  bold = false,
  align = 'left',
  font,
  style,
  children,
  ...rest
}: TextProps) => {

  const fontStyles = {
    fontFamily: font || (bold ? 'Poppins-SemiBold' : 'Poppins-Regular'),
    fontSize: size || defaultFontSize,
  };

  switch (type) {
    case 'h1':
      fontStyles.fontFamily = font || (bold ? 'Poppins-Bold' : 'Poppins-SemiBold');
      fontStyles.fontSize = size || defaultFontSize + 12;
      break;
    case 'h2':
      fontStyles.fontFamily = font || (bold ? 'Poppins-Bold' : 'Poppins-Regular');
      fontStyles.fontSize = size || defaultFontSize + 10;
      break;
    case 'h3':
      fontStyles.fontFamily = font || (bold ? 'Poppins-Bold' : 'Poppins-Regular');
      fontStyles.fontSize = size || defaultFontSize + 8;
      break;
    case 'h4':
      fontStyles.fontFamily = font || (bold ? 'Poppins-Bold' : 'Poppins-Regular');
      fontStyles.fontSize = size || defaultFontSize + 6;
      break;
    case 'h5':
      fontStyles.fontSize = size || defaultFontSize + 4;
      fontStyles.fontFamily = font || (bold ? 'Poppins-SemiBold' : 'Poppins-Regular');
      break;
    case 'h6':
      fontStyles.fontSize = size || defaultFontSize + 2;
      fontStyles.fontFamily = font || (bold ? 'Poppins-SemiBold' : 'Poppins-Regular');
      break;
    case 'p':
      fontStyles.fontFamily = font || (bold ? 'Poppins-SemiBold' : 'Poppins-Regular');
      break;
    case 'small':
      fontStyles.fontFamily = font || (bold ? 'Poppins-SemiBold' : 'Poppins-Light');
      fontStyles.fontSize = size || defaultFontSize - 2;
      break;
    default:
      fontStyles.fontSize = size || defaultFontSize;
  }

  const textStyle = {
    color: color,
    opacity: muted ? 0.5 : 1,
    textAlign: align,
    marginTop: mt || my,
    marginBottom: mb || my,
    marginRight: mr || mx,
    marginLeft: ml || mx,
    marginHorizontal: mx,
    marginVertical: my,
    ...fontStyles,
  };

  return (
    <NativeText
      allowFontScaling={false}
      style={[
        textStyle,
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          includeFontPadding: false,
          textAlignVertical: 'center',
        }]
      }
      {...rest}>
      {children}
    </NativeText>
  );

};

export default Text;
