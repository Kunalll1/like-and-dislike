import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <main className='container flex flex-col items-center pt-10 bg-gray-800 h-screen w-screen'>
      <Card massage={"hello world"} />
    </main>
  )
}

export default App