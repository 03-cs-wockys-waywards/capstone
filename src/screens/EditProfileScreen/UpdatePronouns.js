import DropDownPicker from 'react-native-dropdown-picker'
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const map = {
  she: 'She / Her',
  he: 'He / Him',
  they: 'They / Them',
  undisclosed: "I'd rather not say",
}

export default function UpdatePronouns({ user, setUser }) {
  const { pronouns } = user
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(pronouns)

  useEffect(() => {
    setUser({ ...user, pronouns: value })
  }, [value])

  const items = Object.keys(map).map((item) => {
    return {
      label: map[item],
      value: item,
      selected: value.includes(item) ? true : false,
    }
  })

  return (
    <View style={styles.pronounContainer}>
      <Text style={styles.label}>Pronouns</Text>
      <DropDownPicker
        containerStyle={styles.dropMenu}
        multiple={true}
        min={1}
        open={open}
        items={items}
        value={value}
        onPress={() => setOpen(true)}
        setValue={(value) => setValue(value)}
        onClose={() => setOpen(false)}
        listMode="SCROLLVIEW"
        maxHeight={100}
        labelProps={{
          numberOfLines: 1,
        }}
        badgeTextStyle={styles.dropdownText}
        textStyle={styles.dropdownText}
        mode="BADGE"
        showBadgeDot={false}
        badgeColors={['#E5F4D4', '#F4ECD4']}
      />
    </View>
  )
}
