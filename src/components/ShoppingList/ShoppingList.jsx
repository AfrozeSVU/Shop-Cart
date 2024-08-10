import React from 'react'
import Header from '../Header/Header'
import InputItem from '../InputItem/InputItem';

 //CSS imports
 import './ShoppingList.css'


const ShoppingList = () => {
  return (
    <>  <Header></Header>
    <div className='current-shopping-list'>
       <InputItem/>
    </div>
   </>
  )
}

export default ShoppingList