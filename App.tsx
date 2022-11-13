import React from "react"
import MainApp from "./src/app"

import { i18n } from '@unboared/base-ui.all';
import { en, fr } from "./src/translations"

i18n.translations = { en, fr }

function App() {
  return (
    <MainApp />
  )
}

export default App
