import React from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';
import DrinkForm from './DrinkForm';

function AddDrink(props) {
  const { onAddingDrink } = props;

  function handleAddingDrink(event) {
    onAddingDrink({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.content.value,
      quantity: parseInt(event.target.quantity.value),
      id: v1()
    });
  }

  return (
    <DrinkForm
      onSubmittingForm={handleAddingDrink}
      buttonText='Add Drink' />
  );
}

AddDrink.propTypes = {
  onAddingDrink: PropTypes.func.isRequired
}

export default AddDrink;