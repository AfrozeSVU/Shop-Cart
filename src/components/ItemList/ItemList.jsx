import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
//utils
import { showError } from '../../utlis/showToasts';


function ItemList({ shoppingItems , addQuantity,decQuantity}) {
  

    return (
        <div className='shopping-items-wrapper'>
            {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <div key={item.id} className='items-list'>
                         <div className='change-quanity add-item'
                          onClick={()=>addQuantity(item.id)}
                         >
                         <FontAwesomeIcon icon={faPlus} />
                            </div>
                             <Item
                              itemName={item.name}
                              quantity={item.quantity}
                               
                                        
                             />
                          <div className='change-quanity remove-item'
                             onClick={()=>{
                                if(item.quantity==1) showError(`${item.name} removed from the list`)


                                decQuantity(item.id)}
                             }
                             
                             
                             >
                          <FontAwesomeIcon icon={faMinus} />
                            </div>
                           </div>
                    );
                })
            }
        </div>
    );
}

export default React.memo(ItemList);
