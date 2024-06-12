

import Bubble from './components/icons/Bubble';
function App() {


  return (
      <div className="flex max-w-sm mx-auto my-0 p-6 rounded-lg bg-white shadow-xl text-black mx-8">
        <div className="flex-shrink-0 ">
          <picture className='w-14 h-14'>
          <Bubble/>
          </picture>
          
        </div>
        <div className="ml-6 pt-1 items-center">
          <h4 className="text-black text-xs">ChitChat</h4>
          <p className="text-gray-500 text-xl">You have a new message!</p>
        </div>
      </div>


  )
}

export default App
