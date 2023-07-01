import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        onPress();
    }

    return (
        <View style={styles.ButtonOuterStyle}>
            <Pressable onPress={pressHandler} style={({pressed}) => pressed ? [styles.buttonInnerStyle, styles.pressed] : styles.buttonInnerStyle} android_ripple={{ color: "#640233" }}>
                <Text style={styles.bnuttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonOuterStyle: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerStyle: {
        backgroundColor: '#72063c',
        paddingHorizontal: 16,
        paddingVertical: 6,
        elevation: 2,
    },
    bnuttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});