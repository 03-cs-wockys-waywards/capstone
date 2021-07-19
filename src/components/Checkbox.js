import React from 'react';
import { CheckBox } from 'react-native-elements';

export default function Checkbox({ state, setState, name, value, onPress }) {
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
        // onPress={onPress}
        onPress={() => {
          let newState = [...state, value];
          // prevent pushing duplicate values into state
          if (state.includes(value)) {
            newState = newState.filter((option) => option !== value);
            console.log('newState - first if', newState);

            setState(newState);
          }
          if (value === 'undisclosed') {
            newState = newState.filter((option) => option === 'undisclosed');
            console.log('newState - second if', newState);
            setState(newState);

            // setState(filteredState);
          } else {
            newState = newState.filter((option) => option !== 'undisclosed');
            console.log('newState - third if', newState);

            setState(newState);

            // setState(filteredState);
          }
          console.log('state', state);
          // setState(newState);
        }}
      />
    </>
  );
}
