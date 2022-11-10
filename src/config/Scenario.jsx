import React from "react";

import HomeGamepad from '../Home/Gamepad'
import HomeScreen from '../Home/Screen'

import GameGamepad from '../Game/Gamepad'
import GameScreen from '../Game/Screen'

import EndgameGamepad from '../Endgame/Gamepad'

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
        screen: null,   /**  
                         *  The value is null because we transit to the 'endgame' scene by
                         *  using the component itself (see line 26 in `/src/Game/Screen.tsx`).
                         *  This allows us to pass arguments to the component depending on the 
                         *  previous scene.
                         */
    }
}

export default Scenario;