import React, { useEffect } from 'react';
import './InputItem.css';
import 'react-toastify/dist/ReactToastify.css';
// utils
import { showError, showSuccess } from '../../utlis/showToasts';
import { useForm } from 'react-hook-form';

function InputItem({ addItem }) { // Receiving addItem as a prop
  const { register, handleSubmit, formState: {errors} } = useForm();
 console.log(errors)

  const handleFormSubmission = (data) => { // data contains form inputs
    console.log(data);
    addItem(data.item); // Accessing the item field
    showSuccess('Successfully added item');
  };

  useEffect( () =>{
    if(errors.item && errors.item.type=='required'){
      showError('Item cannot be empty')
    }
    if(errors.item && errors.item.type=='minLength'){
      showError('Item cannot be of less than 3 length')
    }
  }, [errors.item && errors.item.type] );

  console.log( {...register("item", { required: true, minLength: 3 })} )
  return (
    <div className='item-input-wrapper'>
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <input
          className='item-input'
          type="text"
          placeholder='Add an item...'
          {...register("item", { required: true, minLength: 3 })} // Correct register usage
        />
  
        <button className='add-item-button'>
          Add
        </button>
 
      </form>
      
    </div>
  );
}

export default InputItem;
