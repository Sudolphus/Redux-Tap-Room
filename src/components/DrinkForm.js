import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/DrinkForm.css';

function DrinkForm(props) {
  const { onSubmittingForm, buttonText, originalDrink, dispatch } = props;
  let [defaultName, defaultBrand, defaultPrice, defaultContent, defaultQuantity] = [null, null, null, null, 124];
  
  function handleSubmittingForm(event) {
    event.preventDefault();
    onSubmittingForm(event);
  }

  let returnButton;
  if (originalDrink) {
    defaultName = originalDrink.name;
    defaultBrand = originalDrink.brand;
    defaultPrice = originalDrink.price;
    defaultContent = originalDrink.alcoholContent;
    defaultQuantity = originalDrink.quantity;
    returnButton = <Button variant='info' type='button' size='lg' block onClick={()=>dispatch(a.viewDetails(originalDrink.id))}>Back To Drink</Button>
  }

  return (
    <Form onSubmit={handleSubmittingForm}>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' placeholder='Product Name' defaultValue={defaultName} required />
      </Form.Group>
      <Form.Group controlId='brand'>
        <Form.Label>Brand</Form.Label>
        <Form.Control type='text' placeholder='Brand' defaultValue={defaultBrand} required />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type='text' placeholder='Price' defaultValue={defaultPrice} pattern='^\d+\.\d{2}$' required />
            </InputGroup>
            <Form.Text className="text-muted">Price takes a decimal input (e.g. 5.50 or 12.00)</Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId='content'>
            <Form.Label>Alcohol Content</Form.Label>
            <InputGroup>
              <Form.Control type='text' placeholder='Content' defaultValue={defaultContent} pattern='^\d{1,2}\.\d+$' required />
              <InputGroup.Append>
                <InputGroup.Text>%</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Form.Text className='text-muted'>Alcohol Content takes a decimal input (e.g. 5.5 or 6.75)</Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId='quantity'>
            <Form.Label>Pints Remaining</Form.Label>
            <Form.Control type='number' placeholder='Quantity Remaining' defaultValue={defaultQuantity} pattern='^\d+\$' min='0' step='1' required />
            <Form.Text className='text-muted'>The number of pints you have left. A standard keg is 124 pints.</Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <ButtonGroup vertical size='lg'>
        <Button variant='success' type='submit' block>{buttonText}</Button>
        {returnButton}
        <Button variant='secondary' type='button' block onClick={()=>dispatch(a.viewIndex())}>Back To Index</Button>
      </ButtonGroup>
    </Form>
  )
}

DrinkForm.propTypes = {
  onSubmittingForm: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  originalDrink: PropTypes.object
}

const mapStateToProps = (state) => {
  const { currentDrinkId } = state.display;
  const originalDrink = state['drinkList'][currentDrinkId];
  return ({
    originalDrink
  })
}

export default connect(mapStateToProps)(DrinkForm);