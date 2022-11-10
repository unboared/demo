import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

import { useListener, useUnboared } from '@unboared/native.lib'

import ColorView from '../components/ColorView'
import { GAME_NAME } from '../config/Const'

const Screen = () => {
    const unboared = useUnboared()

    const startGame = () => unboared.setLocalScenario(GAME_NAME, "game")

    useListener("pressA", startGame)

    return (
        <View style={styles.center}>
            <ColorView style={styles.center} color="#FFF">
                <Text>Scene : {unboared.getScenario().scenario}</Text>
                <Text>Press A to start the game</Text>
            </ColorView>
            <Pressable style={[styles.center, { backgroundColor: "#FAF" }]} onPress={startGame}>
                <Text>Click on A</Text>
            </Pressable>
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