import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MyTabs = createBottomTabNavigator({});


export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      flex: 1,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  