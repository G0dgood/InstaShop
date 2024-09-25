import { useState } from 'react';
import { TextInput as BaseInput, ColorValue, StyleSheet, TextInputProps as BaseTextInputProps, View } from 'react-native';
import Text from '../Text';
import { defaultFontSize, theme } from '../../style/global';
import React from 'react';

interface TextInputProps extends BaseTextInputProps {
  children?: any,
  prepend?: any,
  postpend?: any,
  label?: string
  showTopLabel?: boolean
  value?: string
  mode?: string
  mb?: number
  error?: string
  touched?: boolean
  outlineColor?: ColorValue
  textColor?: ColorValue
  onChangeText?: (e: any) => void
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
}

const TextInput = ({
  children,
  prepend,
  postpend,
  label,
  placeholder,
  showTopLabel = true,
  value,
  outlineColor = '#ccc',
  textColor = '#000',
  error = '',
  touched = false,
  mb,
  onChangeText,
  onFocus,
  onBlur,
  ...restProps
}: TextInputProps) => {

  const [isFocused, setFocused] = useState(false);

  const handleFocus = (e: any) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: any) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const handleChangeText = (e: any) => {
    onChangeText && onChangeText(e);
  };

  const handleChange = () => { };

  const inputStyle = {
    borderColor: (error && touched) ? 'red' : outlineColor,
    color: textColor,
  };

  return (
    <View >
      {showTopLabel ? <Text color="black" mb={mb} style={TextInputStyles.label}>  {label}</Text> : ""}
      {children ??
        <View style={TextInputStyles.childhold}>
          {prepend && prepend}
          <BaseInput
            style={[
              TextInputStyles.input,
              inputStyle,
            ]}
            placeholder={placeholder}
            placeholderTextColor="gray"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            onChange={handleChange}
            value={value}
            {...restProps}
          />
          {postpend && postpend}
        </View>
      }
      {(error && touched) && <Text color="red" type={'small'}>{error}</Text>}
    </View>
  );
};

export const TextInputStyles = StyleSheet.create({
  'label': {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.005,
    color: '#00000099',
  },

  'childhold': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: theme.dimensions.radius,
    borderColor: '#DDD',
    paddingHorizontal: 15,
    gap: 6,
    marginBottom: 0,
    paddingBottom: 0
  },

  'input': {
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
    flex: 1,
    fontSize: defaultFontSize + 1,
    height: 48,
  },
});

export default TextInput;
