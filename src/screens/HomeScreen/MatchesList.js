import React, { Component, useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { SafeAreaView, FlatList, View, Text } from 'react-native'
import { fetchPotentialMatches } from '../../store/usersReducer'
import styles from './styles'
import UserRow from './UserRow'
import SearchBar from '../../components/SearchBar'
import { firebase } from '../../firebaseSpecs/config'

/*
Happens while Rhetta uses App, after log in
If Rhetta likes a user who isn’t in array 1, this means the user liked her after she signed in
Grab that user from firestore, and check if Rhetta is in their likes array
If yes, match
Add user B’s uid to Rhetta’s likes array (firestore)
If no, no match
Add user B’s uid to Rhetta’s likes array (firestore)

Is user B in Array 1?
	If yes, they’re a match.
If no, then make firestore call for user B’s likes.
	Is Rhetta in user B’s likes array?
		If yes, it’s a match
		If no, there’s no match

Finally, add user B to Rhetta’s likes array

*/

export class MatchesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matchedUsers: [],
    }
  }

  componentDidMount() {
    // get all users have our user (Rhetta) in their likes array
    const currentUserId = firebase.auth().currentUser.uid
    //console.log('>>>>>> Current USER ID from AUTH: ', currentUserId)
    this.props.setPotentials(currentUserId)
  }

  render() {
    const { user, users, navigation } = this.props
    const currentUserLikes = user.likes

    const renderItem = ({ item }) => (
      <UserRow item={item} navigation={navigation} />
    )

    // look through current user's likes array & find matches
    const matches = users.filter((user) => currentUserLikes.includes(user.id))
    console.log('>>>> Matches in render: ', matches)

    if (matches.length > 0) {
      return (
        <SafeAreaView style={styles.listContainer}>
          <FlatList
            data={matches}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </SafeAreaView>
      )
    }
    return <></>
  }
}

const mapState = (state) => ({
  // logged-in user
  user: state.user,
  // users that are potential matches
  users: state.users,
})

const mapDispatch = (dispatch) => ({
  setPotentials: (id) => dispatch(fetchPotentialMatches(id)),
})

export default connect(mapState, mapDispatch)(MatchesList)
