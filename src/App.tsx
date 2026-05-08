import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>JJJ</h1>
      <p>
        Edit <code>src/App.tsx</code> and the page reloads.
      </p>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </div>
  )
}

export default App
