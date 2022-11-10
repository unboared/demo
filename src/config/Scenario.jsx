import React from "react";

import HomeGamepad from '../Home/Gamepad'
import HomeScreen from '../Home/Screen'

import GameGamepad from '../Game/Gamepad'
import GameScreen from '../Game/Screen'

import EndgameGamepad from '../Endgame/Gamepad'
import EndgameScreen from '../Endgame/Screen'

const Scenario = {
    "home": {
        gamepad: <HomeGamepad />,
        screen: <HomeScreen />,
    },
    "game": {
        gamepad: <GameGamepad />,
        screen: <GameScreen />,
    },
    "endgame": {
        gamepad: <EndgameGamepad />,
        screen: <EndgameScreen />,
    }
}

export default Scenario;