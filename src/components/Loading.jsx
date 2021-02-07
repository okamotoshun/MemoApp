import { bool } from 'prop-types';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loading(props) {
  const { isLoading } = props;
  if (!isLoading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    </View>
  );
}

Loading.propTyps = {
  isLoading: bool,
};

Loading.defaultProps = {
  isLoding: false,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    zIndex: 5,
  },
});
