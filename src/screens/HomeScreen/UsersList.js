import React, { Component } from 'react';
import { SafeAreaView, Text, ImageBackground, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { firebase } from '../../firebaseSpecs/config';
import TutorialModal from '../../components/TutorialModal';
import DiscoverList from './DiscoverList';
import MatchesList from './MatchesList';
import styles from './styles';
import image from '../../../assets/gradient.png';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      modalVisible: false,
      modalAppeared: false,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    const { modalAppeared } = this.state.modalAppeared;
    const creationTime = firebase.auth().currentUser.metadata.creationTime;
    const lastSignInTime = firebase.auth().currentUser.metadata.lastSignInTime;
    if (modalAppeared) {
      this.setState({ modalVisible: false });
    } else if (!modalAppeared && creationTime === lastSignInTime) {
      this.setState({ modalVisible: true, modalAppeared: true });
    }
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const { navigation } = this.props;
    const { selectedIndex, modalVisible } = this.state;

    const buttonOne = () => <Text>Discover</Text>;
    const buttonTwo = () => <Text>Matches</Text>;
    const buttons = [{ element: buttonOne }, { element: buttonTwo }];

    return (
      <SafeAreaView style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          buttonContainerStyle={{ color: 'transparent' }}
          containerStyle={{
            borderRadius: 50,
            height: 50,
            marginHorizontal: 30,
            marginVertical: '3%',
            borderColor: '#EAB803',
            borderWidth: 0.5,
            backgroundColor: '#fff',
          }}
          innerBorderStyle={{ color: 'transparent' }}
          selectedButtonStyle={{
            backgroundColor: '#C2D831',
            borderRadius: 50,
          }}
        />
        <ImageBackground source={image} style={styles.image}>
          <TutorialModal
            modalVisible={modalVisible}
            handleRequestClose={() => this.setState({ modalVisible: false })}
            closeModal={() => this.setState({ modalVisible: false })}
          />
          <View style={styles.flatListContainer}>
            {selectedIndex === 0 ? (
              <DiscoverList navigation={navigation} />
            ) : (
              <MatchesList navigation={navigation} />
            )}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
