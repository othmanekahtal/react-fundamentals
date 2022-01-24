// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'
function Box({className = '', size, style = {}, ...props}) {
  const sizeClass = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClass}`}
      style={{
        fontStyle: 'italic',
        ...style,
      }}
      {...props}
    />
  )
}

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }} className='box box--small'> small lightblue box</div >
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box style={{backgroundColor: 'orange'}} size="large">
    large orange box
  </Box>
)

function App() {
  return (
    <>
      {smallBox}
      {mediumBox}
      {largeBox}
    </>
  )
}

export default App
