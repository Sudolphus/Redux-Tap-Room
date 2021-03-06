import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import stout from './img/stout.jpeg';

function DrinkDetails(props) {
  const { drink, dispatch, showDeleteModal } = props;
  const { name, brand, price, alcoholContent, quantity, id } = drink;
  const handleToggle = () => dispatch(a.toggleModal());
  const handleDelete = () => {
    dispatch(a.deleteDrink(id));
    dispatch(a.viewIndex());
  }
  return (
    <React.Fragment>
      <Row>
        <Col>
          <h3>{name} --- ${price}</h3>
          <h5>{brand}</h5>
          <h5><i>{alcoholContent}% alcohol content</i></h5>
          <p><i>{quantity} remaining</i></p>
        </Col>
        <Col>
          <Image src={stout} alt='stout' width="90vw" height="90vh" className='float-right'/>
        </Col>
      </Row>
      <ButtonGroup vertical size='lg'>
        <Button variant='secondary' type='button' block onClick={()=>dispatch(a.viewIndex())}>Back To Index</Button>
        <Button variant='warning' type='button' block onClick={()=>dispatch(a.create(id))}>Edit Drink</Button>
        <Button variant='danger' type='button' block onClick={handleToggle}>Delete Drink</Button>
      </ButtonGroup>
      
      <Modal show={showDeleteModal} onHide={handleToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {name}?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' type='button' onClick={handleToggle}>&times;</Button>
          <Button variant='primary' type='button' onClick={handleDelete}>&#10004;</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

DrinkDetails.propTypes = {
  drink: PropTypes.object,
  showDeleteModal: PropTypes.bool
}

const mapStateToProps = (state) => {
  const { currentDrinkId } = state.display;
  const drink = state['drinkList'][currentDrinkId];
  return ({
    drink,
    showDeleteModal: state.display.showDeleteModal
  })
}

export default connect(mapStateToProps)(DrinkDetails);