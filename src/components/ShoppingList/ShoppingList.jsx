import React from 'react'
import Header from '../Header/Header'
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
 //CSS imports
 import './ShoppingList.css'

const shoppingItems =[
    {id:1 , name:'Apple', quantity:2},
    {id:2, name:'Banana', quantity:1}
]
const ShoppingList = () => {
  return (
    <>  <Header></Header>
    <div className='current-shopping-list'>
       <InputItem/>
       <ItemList
       shoppingItems={shoppingItems}/>
    </div>
   </>
  )
}

export default ShoppingList