// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  const userNameRef = React.useRef()
  // const [userNameGet, userNameSet] = React.useState()
  const [errorMessage, errorSet] = React.useState(null)
  const handleSubmit = event => {
    // this event is created by react called SyntheticBaseEvent
    // to use the native event created by browser use : event.nativeEvent
    event.preventDefault()

    // console.log(event)
    // onSubmitUsername(event.target.elements.username.value)
    console.log(userNameRef)
    onSubmitUsername(userNameRef.current.value)
  }
  const changeHandler = event => {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()

    errorSet(!isLowerCase ? 'username will be lowercase' : null)
    // userNameSet(event.target.value)
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          id="username"
          type="text"
          ref={userNameRef}
          onChange={changeHandler}
        />
      </div>
      <button disabled={!!errorMessage} type="submit">
        Submit
      </button>
      <div style={{color: 'red'}}>{errorMessage}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
