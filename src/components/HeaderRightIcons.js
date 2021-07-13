import React from 'react'
import { Icon } from 'react-native-elements'
import { View } from 'react-native'

export const rightIcons = (navigation) => (
  <View style={{ flexDirection: 'row' }}>
    <Icon
      type="material-community"
      name="message-outline"
      size={25}
      onPress={() => navigation.navigate('Chat')}
    />
    <Icon
      type="material-community"
      name="calendar-check-outline"
      size={25}
      onPress={() => navigation.navigate('Calendar')}
    />
  </View>
)
