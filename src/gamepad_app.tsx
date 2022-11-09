import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import { GAME_NAME } from './config/Const'
import { UnboaredGame, useUnboared } from '@unboared/native.lib'

const GamepadView = () => {
    const unboared = useUnboared()

    return <View style={styles.center}>
        <TouchableOpacity
            style={[styles.center, { backgroundColor: "#FAF" }]}
            onPress={() => unboared.emitAction("pressA")}>
            A
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.center, { backgroundColor: "#AFF" }]}
            onPress={() => unboared.emitAction("pressB")}>
            B
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.center, { backgroundColor: "#FFA" }]}
            onPress={() => unboared.emitAction("pressC")}>
            C
        </TouchableOpacity>
    </View>
}

export default () => {

    return (
        <UnboaredGame
            name={GAME_NAME}
            loader={<Text>Loading gamepad ...</Text>}
        >
            <GamepadView />
        </UnboaredGame>
    );
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
})