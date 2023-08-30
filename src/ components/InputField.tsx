import React from 'react'
import './css/style.css'

interface Props {
  todo: string;
  setTodo:
}

const InputField = ({todo, setTodo}) => {
  return (
    <form className="input">
      <input type="input_box" placeholder='Enter a task!' className='input_box '/>
      <button className="input_submit" type='submit'>Go</button>
    </form>
  )
}

export default InputField
