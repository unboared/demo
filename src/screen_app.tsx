import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { GAME_NAME } from './config/Const'
import { UnboaredGame, useUnboared } from '@unboared/native.lib'
import Scenario from './config/Scenario'

const ScreenSceneManager = () => {
    const unboared = useUnboared()

    const scenario = unboared.getScenario().scenario;
    const scenarioComponent = unboared.getScenario().component;

    return (scenarioComponent ? scenarioComponent : Scenario[scenario].screen);
}

export default () => {
    return (
        <UnboaredGame
            name={GAME_NAME}
            loader={<Text>Loading screen ...</Text>}
        >
            <ScreenSceneManager />
        </UnboaredGame>
    );
}

