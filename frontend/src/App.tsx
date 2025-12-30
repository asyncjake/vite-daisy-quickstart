import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ThemeDropdown from './components/daisy-theme-drop'

function App() {
  const API_URL = "http://localhost:8080";

  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(39)

  const [response, setResponse] = useState('Ready for request')

  const getResponseFromServer = async (test: number) => {
    const rawResponse = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ input: test }),
      headers: { "Content-Type": "application/json" }
    });

    if (!rawResponse.ok) {
      throw new Error(`ERR: rawResponse status: ${rawResponse.status}`);
    }

    const result = await rawResponse.json();
    console.log(result);
    setResponse(result.message);
  }

  const serverButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('Button clicked!', event.clientX, event.clientY);
    getResponseFromServer(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(e.target.value));
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Vite + React + Tailwind + DaisyUI
          </h1>
        </header>


        <div className="flex justify-center gap-6">
          Input to server: <input type="number" value={inputValue} onChange={handleInputChange} placeholder="100" />
          {/*<input type="number" value={inputValue} onChange={handleChange} placeholder="100" something..." />*/}
        </div>
        <div className="flex justify-center gap-6">
          Server post: <button className='btn' onClick={serverButtonClick}>SEND IT</button>
        </div>
        <div className="flex justify-center gap-6">
          Server says: {response}
        </div>


        <div className="flex justify-center gap-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body items-center">
            <button
              className="btn btn-primary"
              onClick={() => setCount((c) => c + 1)}
            >
              count is {count}
            </button>
          </div>
        </div>

        <p className="text-sm opacity-70 text-center">
          Theme selector for DaisyUI
        </p>
        <ThemeDropdown />
      </div>
    </div>
  )
}

export default App
