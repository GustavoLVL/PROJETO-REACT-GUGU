
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Meu primeiro projeto React</h1>

      <button onClick={() => setCount(count + 1)}>
        Cliquei {count} vezes
      </button>
    </div>
  )
}

export default App