import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRouter from './Comonents/AllRouter'

function App() {
  const [count, setCount] = useState(0)

 return <>
    <AllRouter/>
 </>
}

export default App
