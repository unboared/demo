import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { useTranslate } from '@unboared/base-ui.all'
import { useExternalScenario, useListener, useUnboared } from '@unboared/native.lib'

import { GAME_NAME, NUM_CLICK_TO_WIN } from '../config/Const'
import ColorView from '../components/ColorView'
import Endgame from '../Endgame/Screen'

const Screen = () => {
    const unboared = useUnboared()
    const { translate } = useTranslate()

    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const [countC, setCountC] = useState(0)

    useExternalScenario(GAME_NAME, "game")

    useListener("pressA", () => setCountA(prev => prev + 1))
    useListener("pressB", () => setCountB(prev => prev + 1))
    useListener("pressC", () => setCountC(prev => prev + 1))

    useEffect(() => {
        const checkWin = () => {
            if (countA >= NUM_CLICK_TO_WIN && countB >= NUM_CLICK_TO_WIN && countC >= NUM_CLICK_TO_WIN) {
                unboared.setLocalScenario(GAME_NAME, "endgame", <Endgame score={countA + countB + countC} />)
            }
        }
        checkWin()
    }, [countA, countB, countC])

    return (
        <View style={styles.center}>
            <ColorView style={styles.center} color="#FFF">
                <Text>Scene : {unboared.getScenario().scenario}</Text>
                <Text>{translate("screen.game.help", { numClick: NUM_CLICK_TO_WIN })} </Text>
            </ColorView>
            <ColorView style={styles.center} color="#FAF">
                <Text>{translate("screen.game.clickA")} : {countA}</Text>
            </ColorView>
            <ColorView style={styles.center} color="#AFF">
                <Text>{translate("screen.game.clickB")} : {countB}</Text>
            </ColorView>
            <ColorView style={styles.center} color="#FFA">
                <Text>{translate("screen.game.clickC")} : {countC}</Text>
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