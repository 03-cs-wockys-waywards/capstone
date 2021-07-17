import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'
import allInterests from '../../SetUpProfileScreens/ProfileStepTwo/interestsArray'
import { MediumInterestButton } from '../../../components/SmallPill'

export default function InterestsModal({ user, setUser }) {
  const [interests, setInterests] = useState(user.interests)
  const [modalVisible, setModalVisible] = useState(false)

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

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Update your interests below</Text>
            <Text style={styles.subtitle}>
              Selected {interests.length}/5 interests
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleAddInterests()}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
            <ScrollView
              style={styles.flatlist}
              contentContainerStyle={styles.flatListContainer}
            >
              {allInterests.map((item, index) => (
                <MediumInterestButton
                  key={index}
                  onPress={() => handlePress(item)}
                  text={item}
                  backgroundColor={
                    interests.includes(item) ? '#C2D831' : '#F0F5CC'
                  }
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.openText}>+ / -</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    paddingHorizontal: 5,
    paddingVertical: 35,
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
    backgroundColor: '#C2D831',
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.2,
  },
  openText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  buttonClose: {
    backgroundColor: '#F81A51',
    marginBottom: 20,
    paddingHorizontal: 50,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Lato_700Bold',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Lato_300Light_Italic',
    fontSize: 20,
    letterSpacing: 0.2,
  },
  subtitle: {
    marginBottom: 10,
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 5,
  },
})
