import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { firebase } from './firebaseSpecs/config'
import { HomeScreen } from './screens'
import { clearUserData, fetchUser } from './store/userReducer'

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
  return null
}

class Main extends Component {
  componentDidMount() {
    // this.props.clearUserData()
    this.props.setUser()
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#d7f81e"
        inactiveColor="#e4dbff"
        labeled={false}
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: '#106563' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={EmptyScreen}
          listeners={({ navigation }) => ({
            tabPress: (evt) => {
              evt.preventDefault()
              navigation.navigate('Profile', {
                uid: firebase.auth().currentUser.uid,
              })
            },
          })}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}

const mapState = (store) => ({
  currentUser: store.user,
})

const mapDispatch = (dispatch) => ({
  clearUserData: () => dispatch(clearUserData()),
  setUser: () => dispatch(fetchUser()),
})

export default connect(mapState, mapDispatch)(Main)

