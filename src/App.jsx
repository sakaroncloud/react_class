import { useState } from 'react'
import LoginForm from './components/LoginForm'
import { AuthCard } from './components/AuthCard'
import { ShowOrHide } from './components/show-or-hide'
import { ShowOrHideTwo } from './components/show-or-hide-two'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' grid grid-cols-2 gap-10 pt-40 px-20'>
      <ShowOrHideTwo />

    </div>
  )
}

export default App
