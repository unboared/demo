import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { useTranslate } from '@unboared/base-ui.all'
import { useExternalScenario, useListener, useUnboared } from '@unboared/native.lib'

import ColorView from '../components/ColorView'
import { GAME_NAME } from '../config/Const'

type ScreenProps = {
    score: number
}

const Screen = ({ score }: ScreenProps) => {
    const unboared = useUnboared()
    const { translate } = useTranslate()

    useExternalScenario(GAME_NAME, 'endgame')
    useListener("pressA", () => unboared.setLocalScenario(GAME_NAME, 'home'))
    useListener("pressB", () => unboared.setLocalScenario(GAME_NAME, 'game'))

    return (
        <View style={styles.center}>
            <ColorView style={styles.center} color="#FFF">
                <Text>Scene : {unboared.getScenario().scenario}</Text>
                <Text>{translate("screen.endgame.title")} : {score} ({score === 15 ? "Congratulations" : "Try again"})</Text>
            </ColorView>
            <ColorView style={styles.center} color="#FAF">
                <Text>A : {translate("screen.endgame.goHome")}</Text>
            </ColorView>
            <ColorView style={styles.center} color="#AFF">
                <Text>B : {translate("screen.endgame.restart")}</Text>
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