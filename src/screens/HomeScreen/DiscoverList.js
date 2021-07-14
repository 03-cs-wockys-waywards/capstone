import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { fetchUsersWithInterests } from '../../store/discoverUsersReducer'
import UserRow from './UserRow'
import { firebase } from '../../firebaseSpecs/config'

export class DiscoverList extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
  }

  // get current user's doc & interests
  componentDidMount() {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          const user = snapshot.data()
          const interests = user.interests
          // set users with similar interests in the redux store
          this.props.setInterests(interests)
        } else {
          console.log('user does not exist')
        }
      })
  }

  renderItem({ item }) {
    return <UserRow item={item} navigation={this.props.navigation} />
  }

  keyExtractor(item) {
    return item.id.toString()
  }

  render() {
    const { renderItem, keyExtractor } = this
    const { user, users } = this.props
    // filter out the current user from discover list
    const discoverUsers = users.filter((person) => person.id !== user.id)

    return (
      <FlatList
        data={discoverUsers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        initialNumToRender={7}
      />
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  users: state.discoverUsers,
})

const mapDispatch = (dispatch) => ({
  setInterests: (interests) => dispatch(fetchUsersWithInterests(interests)),
})

export default connect(mapState, mapDispatch)(DiscoverList)
