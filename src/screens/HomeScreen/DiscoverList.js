import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, Text } from 'react-native'
import { fetchUsersWithInterests } from '../../store/discoverUsersReducer'
import UserRow from './UserRow'
import { firebase } from '../../firebaseSpecs/config'
import styles from './styles'

const EmptyMessage = () => {
  return (
    <Text style={[styles.emptyMessage, styles.emptyContainer]}>
      No users with a similar interest... yet 🥺
    </Text>
  )
}

export class DiscoverList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: false,
      interests: [],
    }

    this.renderItem = this.renderItem.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount() {
    // get list of users with similar interests
    this.props.getUsers()
    this.setState({ isFetching: false })
  }

  renderItem({ item }) {
    return <UserRow item={item} navigation={this.props.navigation} />
  }

  keyExtractor(item) {
    return item.id.toString()
  }

  onRefresh() {
    this.setState({ isFetching: true }, () => {
      this.props.getUsers()
      this.setState({ isFetching: false })
    })
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
        ListEmptyComponent={EmptyMessage}
        onRefresh={() => this.onRefresh()}
        refreshing={this.state.isFetching}
      />
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  users: state.discoverUsers,
})

const mapDispatch = (dispatch) => ({
  getUsers: () => dispatch(fetchUsersWithInterests()),
})

export default connect(mapState, mapDispatch)(DiscoverList)
