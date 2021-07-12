import React, { Component, useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { SafeAreaView, FlatList } from 'react-native'
import { fetchUsersWithInterests } from '../../store/usersReducer'
import styles from './styles'
import UserRow from './UserRow'
import SearchBar from '../../components/SearchBar'
import { firebase } from '../../firebaseSpecs/config'

/*

Look through Rhetta’s likes array (array 2)
All users in array 1 AND array 2 are matches

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
      potentialMatches: [],
      matchedUsers: [],
    }
  }

  async componentDidMount() {
    // get all users have our user (Rhetta) in their likes array
    const currentUserId = firebase.auth().currentUser.uid
    console.log('>>>>>> Current USER ID: ', currentUserId)
    const userRef = firebase.firestore().collection('users')
    await userRef
      .where('likes', 'array-contains', currentUserId)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          let users = snapshot.docs.map((doc) => {
            const data = doc.data()
            const id = doc.id
            return { id, ...data }
          })
          console.log('>>>>>> Users pulled from firestore: ', users)
          //this.setState({ potentialMatches: users })
          // console.log(
          //   '>>>>>> Potential matches on state: ',
          //   this.state.potentialMatches
          // )
        } else {
          console.log('users do not exist')
        }
      })
    // grab Rhetta's likes array
    //const currentUserLikes = this.props.user.likes
    //console.log(">>>>>Current user's LIKES array: ", currentUserLikes)
  }

  render() {
    //console.log('>>>>> User PROPS on Matches List: ', this.props.user)
    return (
      <SafeAreaView></SafeAreaView>
      // <SafeAreaView style={styles.listContainer}>
      //   <FlatList
      //     data={matchedUsers}
      //     keyExtractor={(item) => item.id.toString()}
      //     // data={tempDiscoverData}
      //     renderItem={renderItem}
      //     // To prevent SearchBar component from re-rendering (i.e. keyboard losing focus),
      //     // directly render SearchBar inside of ListHeaderComponent rather than using a separate function
      //     ListHeaderComponent={
      //       <SearchBar
      //         updateSearchText={updateSearchText}
      //         searchText={searchText}
      //       />
      //     }
      //     stickyHeaderIndices={[0]}
      //   />
      // </SafeAreaView>
    )
  }
}

const mapState = (state) => ({
  // logged-in user
  user: state.user,
  // users with similar interests
  users: state.users,
})

const mapDispatch = (dispatch) => ({
  setInterests: (interests) => dispatch(fetchUsersWithInterests(interests)),
})

export default connect(mapState, mapDispatch)(MatchesList)
