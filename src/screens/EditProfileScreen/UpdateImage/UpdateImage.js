import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import ImageModal from './ImageModal';
import styles from '../styles';

export default function UpdateImage({ user, setUser }) {
  const { profilePicture } = user;
  const [userPic, setUserPic] = useState(profilePicture);

  useEffect(() => {
    setUser({ ...user, profilePicture: userPic });
  }, [userPic]);

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: userPic }} style={styles.image} />
      <ImageModal userId={user.id} setUserPic={setUserPic} />
    </View>
  );
}
