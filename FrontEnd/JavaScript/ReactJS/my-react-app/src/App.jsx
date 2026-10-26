import { useState } from 'react'
import './App.css'
import Great from './components/greet'
import Hello from './components/hello'
import Message from './components/Message'
import FunctionClick from './components/functionClick'
import UserGreeting from './components/userGreet'
import NameList from './components/nameList'

function App() {
  return (
    <div className='App'>
      <NameList />
    </div>
  )
}

export default App
