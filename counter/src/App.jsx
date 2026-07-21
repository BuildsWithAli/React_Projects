import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px', padding: '10px 20px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ padding: '10px 20px' }}>
        Decrement
      </button>
    </div>
  )
}

export default App