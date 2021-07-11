import React, { useState, useDispatch } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoubleTap from 'react-native-double-tap'
import styles from './styles'

export default function UserRow({ item }) {
  const [like, setLike] = useState(false)
  const [likes, setLikes] = useState([])

  return (
    <View style={styles.item}>
      <Avatar size="large" rounded source={{ uri: item.profilePicture }} />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.title}>
            {item.firstName} {item.lastName[0]}.
          </Text>
          <DoubleTap doubleTap={() => setLike(!like)} delay={200}>
            {like ? (
              <MaterialCommunityIcons name="heart" size={18} />
            ) : (
              <MaterialCommunityIcons name="heart-plus-outline" size={18} />
            )}
          </DoubleTap>
        </View>
        <FlatList
          style={{ flexDirection: 'row', flexWrap: 'wrap' }}
          data={item.interests}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.interest}>
              <Text style={styles.interestText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => (item + index).toString()}
        />
      </View>
    </View>
  )
}

// heart, heart-outline, heart-plus-outline
