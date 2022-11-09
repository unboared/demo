import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { GAME_NAME } from './config/Const'
import { UnboaredGame, useListener } from '@unboared/native.lib'
import ColorView from './components/ColorView'

const ScreenView = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const [countC, setCountC] = useState(0)

    useListener("pressA", () => setCountA(prev => prev + 1))
    useListener("pressB", () => setCountB(prev => prev + 1))
    useListener("pressC", () => setCountC(prev => prev + 1))


    return <View style={styles.center}>
        <ColorView style={styles.center} color="#FAF">
            <Text>Click on A : {countA}</Text>
        </ColorView>
        <ColorView style={styles.center} color="#AFF">
            <Text>Click on B : {countB}</Text>
        </ColorView>
        <ColorView style={styles.center} color="#FFA">
            <Text>Click on C : {countC}</Text>
        </ColorView>
    </View>
}

export default () => {
    return (
        <UnboaredGame
            name={GAME_NAME}
            loader={<Text>Loading screen ...</Text>}
        >
            <ScreenView />
        </UnboaredGame>
    );
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignSelf:'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
})