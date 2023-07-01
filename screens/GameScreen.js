import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import { Alert } from 'react-native';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
} 
   
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver, setroundsNumber }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([])

    useEffect(() => {
        if (currentGuess === userNumber){
            setroundsNumber(guessRounds.length)
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])
    
    
    function nextGuessHandler(direction){
        if ((direction == 'lower' && currentGuess < userNumber) ||
        (direction == 'greater' && currentGuess > userNumber)){
            Alert.alert("don't Lie!", "hello?", [{text: 'sorry', style: 'cancel'}]);
            return;
        }
        if (direction == 'lower'){
            maxBoundary = currentGuess; 
        }
        else{
            minBoundary = currentGuess + 1;
        }
        const rndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(rndNumber);
        setGuessRounds([rndNumber, ...guessRounds])
    }
    return (
        <View style={styles.screen}>
            <Title>Game Screen!</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text>Higher or Lower?</Text>
                <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>

                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </Card>
            <View>
                <Text>computer guesses</Text>
                <FlatList
                    keyExtractor={item => item}
                    data={guessRounds}
                    renderItem={items => <Text>{items.item}</Text>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})