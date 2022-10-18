import React, {useState} from 'react'
import Overview from './Overview'

const App = () => {
  const [items, setItems] = useState([])
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setItems([...items, inputText]) 
    setInputText('')
  }

  return (
    <div>
      <input type="text" placeholder='task' value={inputText} onChange={handleChange}/>
      <button onClick={handleClick}>
          submit
        </button>
      <Overview items={items}/>
    </div>
  )
}

export default App
