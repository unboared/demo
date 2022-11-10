import React from 'react'
import { Text } from 'react-native'

import { UnboaredGame, useUnboared } from '@unboared/native.lib'

import { GAME_NAME } from './config/Const'
import Scenario from './config/Scenario'

const GamepadSceneManager = () => {
    const unboared = useUnboared()

    console.log("JE SUIS ICIIII")
    console.log(Scenario[unboared.getScenario().scenario].gamepad)


    return (Scenario[unboared.getScenario().scenario].gamepad)
}

export default () => {
    return (
        <UnboaredGame
            name={GAME_NAME}
            loader={<Text>Loading gamepad ...</Text>}
        >
            <GamepadSceneManager />
        </UnboaredGame>
    );
}
