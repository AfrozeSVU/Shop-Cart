import React from 'react'
import Item from '../Item/Item'

 function ItemList({shoppingItems}){
    return(
        <div className='shopping-items-wrapper'>
        {
            shoppingItems.map(item=>{
                return 
                <Item/>
            }

            )
        }
        </div>
    )
    
 }

export default ItemList