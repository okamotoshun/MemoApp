import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

import firebase from 'firebase';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`); //collectionの参照 currentUserはfirebaseから取得
    ref
      .add({
        bodyText,
        updatedAt: new Date(), //現在の時刻
      })
      .then((docRef) => {
        console.log('Created', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 26,
  },
});
