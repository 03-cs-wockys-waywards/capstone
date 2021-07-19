import React from 'react';
import { CheckBox } from 'react-native-elements';

export default function Checkbox({ state, name, value, onPress }) {
  return (
    <>
      <CheckBox
        title={name}
        containerStyle={{
          backgroundColor: '#FFFFFF',
          borderWidth: 0,
          justifyContent: 'space-around',
          marginHorizontal: 0,
          padding: 5,
        }}
        textStyle={{
          fontSize: 16,
          fontWeight: 'normal',
          fontFamily: 'Lato_400Regular',
          letterSpacing: 0.2,
        }}
        checkedIcon="check-circle"
        uncheckedIcon="check-circle"
        checkedColor="#4B9CED"
        checked={state.includes(value)}
        onPress={onPress}
      />
    </>
  );
}
