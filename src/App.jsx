import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img class="chat-notification-logo" src="../src/assets/ringing.png" alt="ChitChat Logo"/>
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>

    </>
  )
}

export default App
