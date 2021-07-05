import React from 'react';
import { CheckBox } from 'react-native-elements';

export default function Checkbox({ state, setState, name, value }) {
  return (
    <>
      <CheckBox
        title={name}
        containerStyle={{
          backgroundColor: '#FFFFFF',
          borderWidth: 0,
          justifyContent: 'space-around',
          marginHorizontal: 0,
          padding: 0,
        }}
        textStyle={{
          fontSize: 16,
          fontWeight: 'normal',
        }}
        checkedIcon="check-circle"
        uncheckedIcon="check-circle"
        checkedColor="#276c8e"
        checked={state.includes(value)}
        onPress={() => {
          let newState = [...state, value];
          if (state.includes(value)) {
            newState = newState.filter((pronoun) => pronoun !== value);
          }
          setState(newState);
        }}
      />
    </>
  );
}
