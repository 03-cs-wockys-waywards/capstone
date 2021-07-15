import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { fetchPotentialMatches } from '../../store/potentialMatchesReducer'
import UserRow from './UserRow'
import { firebase } from '../../firebaseSpecs/config'

export class MatchesList extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
  }

  componentDidMount() {
    // get all users have our user in their likes array
    const currentUserId = firebase.auth().currentUser.uid
    this.props.setPotentials(currentUserId)
  }

  renderItem({ item }) {
    return <UserRow item={item} navigation={this.props.navigation} />
  }

  keyExtractor(item) {
    return item.id.toString()
  }

  render() {
    const { renderItem, keyExtractor } = this
    const { user, potentialMatches } = this.props
    const currentUserLikes = user.likes

    // look through current user's likes array & find matches
    const matches = potentialMatches.filter((user) =>
      currentUserLikes.includes(user.id)
    )

    if (matches.length > 0) {
      return (
        <FlatList
          data={matches}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          initialNumToRender={7}
        />
      )
    }
    return <></>
  }
}

const mapState = (state) => ({
  // logged-in user
  user: state.user,
  // users that are potential matches
  potentialMatches: state.potentialMatches,
})

const mapDispatch = (dispatch) => ({
  setPotentials: (id) => dispatch(fetchPotentialMatches(id)),
})

export default connect(mapState, mapDispatch)(MatchesList)
