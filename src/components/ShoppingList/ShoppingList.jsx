import React from 'react'
import Header from '../Header/Header'
 import InputItem from '../InputItem/InputItem'
const ShoppingList = () => {
  return (
    <>  <Header></Header>
    <div className='currennt-shopping-list'>
       <InputItem/>
    </div>
   </>
  )
}

export default ShoppingList