import React from 'react'
//CSS imports
import './InputItem.css'

const InputItem = () => {
  return (
    <div className='item-input-wrapper'> 

    <input className='item-input'   type="text" placeholder='add an item....'/>
    <button className='add-item-button'>Add</button>
    </div>
  )
}

export default InputItem