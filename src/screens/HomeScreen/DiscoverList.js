import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, FlatList } from 'react-native'
import { fetchUsersWithInterests } from '../../store/discoverUsersReducer'
import styles from './styles'
import { UserRow, MemoizedUserRow } from './UserRow'
import { firebase } from '../../firebaseSpecs/config'

//const keyExtractor = (item) => item.id.toString()

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
    return <MemoizedUserRow item={item} navigation={this.props.navigation} />
  }

  keyExtractor(item) {
    return item.id.toString()
  }

  render() {
    const { renderItem, keyExtractor } = this
    const { discoverUsers } = this.props

    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={discoverUsers}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          initialNumToRender={7}
        />
      </SafeAreaView>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  discoverUsers: state.discoverUsers,
})

const mapDispatch = (dispatch) => ({
  setInterests: (interests) => dispatch(fetchUsersWithInterests(interests)),
})

export default connect(mapState, mapDispatch)(DiscoverList)
