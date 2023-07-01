import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card({ children }) {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        // start: this block of code is for IOs
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // end
        elevation: 4,
        marginTop: 36,
        backgroundColor: 'gray'
    },
});
