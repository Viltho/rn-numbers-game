import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: "#72063c",
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold'
    }
});