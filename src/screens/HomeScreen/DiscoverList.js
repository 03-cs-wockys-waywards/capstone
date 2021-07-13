import React, { Component, useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { SafeAreaView, FlatList } from 'react-native'
import { fetchUsersWithInterests } from '../../store/usersReducer'
import styles from './styles'
import UserRow from './UserRow'
import SearchBar from '../../components/SearchBar'
import { firebase } from '../../firebaseSpecs/config'

const DATA = [
  {
    id: 1,
    email: 'petedays@gmail.com',
    firstName: 'Peter',
    lastName: 'Days',
    interests: ['Graffiti', 'Parkour', 'Ghost hunting', 'Larping', 'Cooking'],
    profilePicture:
      'https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxwb3J0cmFpdHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['he'],
  },
  {
    id: 2,
    email: 'art@gmail.com',
    firstName: 'Artemisia',
    lastName: 'Alvarez',
    interests: [
      'Cooking',
      'Cosplaying',
      'Fashion',
      'Ice skating',
      'Kite flying',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1542328523081-0ffac8697606?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['she'],
  },
  // potential soul mate/best friend
  {
    id: 3,
    email: 'minnie@gmail.com',
    firstName: 'Minnie',
    lastName: 'Salter',
    interests: [
      'Graffiti',
      'Cosplaying',
      'Ghost hunting',
      'Cooking',
      'Roller skating',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['she'],
  },
  {
    id: 4,
    email: 'indi@gmail.com',
    firstName: 'India',
    lastName: 'Hodges',
    interests: [
      'Mushroom hunting',
      'Flower arranging',
      'Gardening',
      'Beekeeping',
      'Pottery',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1622635883222-7f89c176ed1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['she'],
  },
  {
    id: 5,
    email: 'ronbon@gmail.com',
    firstName: 'Ronnie',
    lastName: 'Bonner',
    interests: [
      '3D printing',
      'Photography',
      'Gardening',
      'Pottery',
      'Model building',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1604945964942-83d4d3e92a2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUxfHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['he'],
  },
  {
    id: 6,
    email: 'jbaldwin@gmail.com',
    firstName: 'Jay',
    lastName: 'Baldwin',
    interests: [
      'Tai chi',
      'Foraging',
      'Knife making',
      'Cooking',
      'Board games',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1597225156148-b82b8b4d0c7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM0fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    pronouns: ['he'],
  },
  {
    id: 7,
    email: 'rstone@gmail.com',
    firstName: 'Raleigh',
    lastName: 'Stone',
    interests: [
      'Foraging',
      'Photography',
      'Skateboarding',
      'Tai chi',
      'Jigsaw puzzles',
    ],
    profilePicture:
      'https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    pronouns: ['they'],
  },
]

export class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      discoverData: [],
    }
  }

  // get current user's doc & interests
  componentDidMount() {
    //console.log('useEffect in UsersList running...')
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
    // console.log('UserList user interests: ', this.props.user.interests)
  }

  render() {
    // console.log('UserList user interests: ', this.props.user.interests)
    const { users, navigation } = this.props
    const { searchText } = this.state

    const renderItem = ({ item }) => (
      <UserRow item={item} navigation={navigation} />
    )

    //const [searchText, setSearchText] = useState('')
    // Once we connect to the firebase, discoverData should be retrieved from firebase through useEffect hook when the component mounts
    //const [discoverData, setDiscoverData] = useState([...DATA])
    //const [discoverData, setDiscoverData] = useState([...users])

    // const updateSearchText = (text) => {
    //   setSearchText(text)
    //   filterDiscover(text)
    // }
    const updateSearchText = (text) => {
      this.setState({ searchText: text })
      filterDiscover(text)
    }

    // TODO: convert into a helper function to use in the Chats screen as well
    // const filterDiscover = (text) => {
    //   //const tempDiscoverData = [...DATA]
    //   const tempDiscoverData = [...users]
    //   const newDiscoverData = tempDiscoverData.filter((user) => {
    //     const firstName = user.firstName.toUpperCase()
    //     const searchTerm = text.toUpperCase()
    //     return firstName.indexOf(searchTerm) > -1
    //   })
    //   setDiscoverData(newDiscoverData)
    // }
    const filterDiscover = (text) => {
      //const tempDiscoverData = [...DATA]
      const tempDiscoverData = [...users]
      const newDiscoverData = tempDiscoverData.filter((user) => {
        const firstName = user.firstName.toUpperCase()
        const searchTerm = text.toUpperCase()
        return firstName.indexOf(searchTerm) > -1
      })
      this.setState({ discoverData: newDiscoverData })
    }

    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          // data={tempDiscoverData}
          renderItem={renderItem}
          // To prevent SearchBar component from re-rendering (i.e. keyboard losing focus),
          // directly render SearchBar inside of ListHeaderComponent rather than using a separate function
          ListHeaderComponent={
            <SearchBar
              updateSearchText={updateSearchText}
              searchText={searchText}
            />
          }
          stickyHeaderIndices={[0]}
        />
      </SafeAreaView>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  users: state.users,
})

const mapDispatch = (dispatch) => ({
  setInterests: (interests) => dispatch(fetchUsersWithInterests(interests)),
})

export default connect(mapState, mapDispatch)(UsersList)