import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native'
//import styles from './style'
import allInterests from '../../SetUpProfileScreens/ProfileStepTwo/interestsArray'
import { MediumPill } from '../../../components/SmallPill'
import { getLightColorsArray } from '../../../helpers/getColorsArray'
import { lightColors } from '../../../helpers/colors.js'

export default function InterestsModal({ user, setUser }) {
  const [interests, setInterests] = useState(user.interests)
  const [modalVisible, setModalVisible] = useState(false)
  const [colors, setColors] = useState([])

  useEffect(() => {
    const colors = getLightColorsArray(lightColors, allInterests.length)
    setColors(colors)
  }, [])

  const handlePress = (item) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((interest) => interest !== item))
    } else if (interests.length < 5) {
      setInterests([...interests, item])
    }
  }

  const handleAddInterests = () => {
    if (interests.length) {
      setUser({ ...user, interests: interests })
      setModalVisible(false)
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <MediumPill
          key={index}
          text={item}
          backgroundColor={interests.includes(item) ? '#EAB803' : colors[index]}
        />
      </TouchableOpacity>
    )
  }

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => handleAddInterests()}
        >
          <Text style={styles.textStyle}>Update my interests</Text>
        </TouchableOpacity>
        <FlatList
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={styles.row}
          data={allInterests}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </Modal>

      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>+ / -</Text>
      </TouchableOpacity>
    </>
  )
}

export const styles = StyleSheet.create({
  interestsContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#132077',
  },
  buttonClose: {
    backgroundColor: '#2788EA',
    marginBottom: 20,
    marginTop: '20%',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Lato_700Bold',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    marginHorizontal: 15,
  },
})
