import React from 'react'

import { Button } from 'pokebutton'
import 'pokebutton/dist/index.css'

const App = () => {
  return (
    <>
      {/* button tipleri test edildi */}
      <Button type='primary' text='Primary Button' />
      <Button type='dashed' text='Dashed Button' />
      <Button type='text' text='Text Button' />
      <Button type='link' text='Link Button' />
      <Button text='Default Button' />
    </>
  )
}

export default App
