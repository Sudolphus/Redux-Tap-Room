import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './css/DrinkListCard.css';

function DrinkListCard(props) {
  const { onLinkClick, onChangingQuantity, drink } = props;
  let removeButton;
  let quantity;
  let priceColor;

  if (drink.quantity > 0) {
    removeButton = <Button variant='secondary' type='button' size='sm' block onClick={()=>onChangingQuantity(drink, -1)}>Remove a Pint</Button>
    if (drink.quantity < 10) {
      quantity = <Card.Text>Pints Remaining: {drink.quantity}<br /><span className="stock-warning">Almost Empty!</span></Card.Text>;
    } else {
      quantity = <Card.Text>Pints Remaining: {drink.quantity}<br /><br /></Card.Text>
    }
  } else if (drink.quantity === 0) {
    quantity = <Card.Text className="out-of-stock">Out of Stock<br /><br /></Card.Text>;
    removeButton = <Button variant='secondary' type='button' size='sm' block disabled>Remove a Pint</Button>;
  }

  if (parseFloat(drink.price) > 7) {
    priceColor = 'text-danger';
  } else if (parseFloat(drink.price) > 4) {
    priceColor = 'text-warning';
  } else {
    priceColor = 'text-info';
  }

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title onClick={()=>onLinkClick('details', drink.id)}>{drink.name}</Card.Title>
        <Card.Subtitle className={priceColor}>${drink.price}</Card.Subtitle>
        {quantity}
      </Card.Body>
      <Card.Footer>
        <ButtonGroup vertical size='sm'>
          <Button variant='primary' type='button' block onClick={()=>onChangingQuantity(drink, 1)}>Add a Pint</Button>
          <Button variant='success' type='button' block onClick={()=>onChangingQuantity(drink, 124)}>Add a Keg</Button>
          {removeButton}
        </ButtonGroup>
      </Card.Footer>
    </Card>
  )
}

DrinkListCard.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onChangingQuantity: PropTypes.func.isRequired,
  drink: PropTypes.object.isRequired
}

export default DrinkListCard;