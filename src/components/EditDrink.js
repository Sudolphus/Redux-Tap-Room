import React from 'react';
import PropTypes from 'prop-types';
import DrinkForm from './DrinkForm';

function EditDrink(props) {
  const { onEditDrink, drinkId } = props;

  function handleEditingDrink(event) {
    onEditDrink({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.content.value,
      quantity: parseInt(event.target.quantity.value),
      id: drinkId
    });
  }

  return (
    <DrinkForm
      onSubmittingForm={handleEditingDrink}
      buttonText="Edit Drink" />
  )
}

EditDrink.propTypes = {
  onEditDrink: PropTypes.func.isRequired,
  drinkId: PropTypes.string.isRequired
}

export default EditDrink;