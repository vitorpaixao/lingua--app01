import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
        <h1>Vetta Design team</h1>
      <p>
        Edit <code>src/App.tsx</code> and the page reloads.
      </p>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Vitor
      </button>
    </div>
  )
}

export default App
