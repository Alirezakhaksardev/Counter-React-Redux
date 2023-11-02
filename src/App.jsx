import './App.css'
import {GrFormAdd} from 'react-icons/gr'
import {IoMdRemove} from 'react-icons/io'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount, selectCounter } from './features/counter/counteSlice'
import { useState } from 'react'
import User from './components/User'


function App() {
  const [value , setValue] = useState(1)
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch()
  return (
    <>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <div className='counter'>
          
          <div>
            <p>Count is : {counter}</p>
          </div>
          
          <div>
            <button onClick={() => dispatch(increment())}>
              <GrFormAdd/>
            </button>
            <button onClick={() => dispatch(decrement())}>
              <IoMdRemove/>
            </button>
          </div>
          <div>
            <input type="number" min="1" value={value} onChange={e=> setValue(e.target.value)}  />
            <button onClick={() => dispatch(incrementByAmount(+value))}>
              <GrFormAdd/>
            </button>
            <button onClick={() => dispatch(decrementByAmount(+value))}>
              <IoMdRemove/>
            </button>
          </div>
        </div>
        
      </div>
      <User/>
    </>
  )
}

export default App
