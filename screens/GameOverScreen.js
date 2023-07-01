import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textContent}>
        Your game needed{' '}
        <Text>{roundsNumber}</Text>{' '}moves to reach the number{' '}
        <Text>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 50,
  },
  textContent: {
    alignContent: 'center',
    fontSize: 24,
    color: 'white'
  }
});