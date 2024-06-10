

import Bubble from './components/icons/Bubble';
function App() {


  return (
      <div class="flex max-w-sm mx-auto my-0 p-6 rounded-lg bg-white shadow-xl text-black">
        <div class="chat-notification-logo-wrapper">
          <Bubble/>
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">ChitChat</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>


  )
}

export default App
