import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

import { useTranslate } from '@unboared/base-ui.all'
import { useListener, useUnboared } from '@unboared/native.lib'

import ColorView from '../components/ColorView'
import { GAME_NAME } from '../config/Const'

const Screen = () => {
    const unboared = useUnboared()
    const { translate } = useTranslate()

    const startGame = () => unboared.setLocalScenario(GAME_NAME, "game")

    useListener("pressA", startGame)

    return (
        <View style={styles.center}>
            <ColorView style={styles.center} color="#FFF">
                <Text>Scene : {unboared.getScenario().scenario}</Text>
                <Text>{translate("screen.home.startText")}</Text>
            </ColorView>
            <Pressable style={[styles.center, { backgroundColor: "#FAF" }]} onPress={startGame}>
                <Text>{translate("screen.home.clickA")}</Text>
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