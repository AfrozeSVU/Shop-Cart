import React from 'react'
import Item from '../Item/Item'

 function ItemList({shoppingItems}){
    return(
        <div className='shopping-items-wrapper'>
        {
           shoppingItems && shoppingItems.map(item=>{
                return 
                <Item
                itemName={item.name}
                quantity={quantity.id}
                key={item.id}
                />
            }

            )
        }
        </div>
    )
    
 }

export default ItemList