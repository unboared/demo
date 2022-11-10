import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { useExternalScenario, useListener, useUnboared } from '@unboared/native.lib'

import ColorView from '../components/ColorView'
import { GAME_NAME } from '../config/Const'

type ScreenProps = {
    score: number
}

const Screen = ({ score }: ScreenProps) => {
    const unboared = useUnboared()

    useExternalScenario(GAME_NAME, 'endgame')
    useListener("pressA", () => unboared.setLocalScenario(GAME_NAME, 'home'))
    useListener("pressB", () => unboared.setLocalScenario(GAME_NAME, 'game'))

    return (
        <View style={styles.center}>
            <ColorView style={styles.center} color="#FFF">
                <Text>Scene : {unboared.getScenario().scenario}</Text>
                <Text>Final score : {score} ({score === 15 ? "Congratulations" : "Try again"})</Text>
            </ColorView>
            <ColorView style={styles.center} color="#FAF">
                <Text>A : Back to home</Text>
            </ColorView>
            <ColorView style={styles.center} color="#AFF">
                <Text>B : Restart game</Text>
            </ColorView>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Screen;