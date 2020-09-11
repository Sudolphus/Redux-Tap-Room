import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import stout from './img/stout.jpeg';

function DrinkDetails(props) {
  const { onLinkClick, onDelete, drink } = props;
  const { name, brand, price, alcoholContent, quantity } = drink;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
      <Button variant='secondary' type='button' size='lg' block onClick={()=>onLinkClick('index')}>Back To Index</Button>
      <Button variant='warning' type='button' size='lg' block onClick={()=>onLinkClick('edit', drink)}>Edit Drink</Button>
      <Button variant='danger' type='button' size='lg' block onClick={handleShow}>Delete Drink</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {name}?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' type='button' onClick={handleClose}>&times;</Button>
          <Button variant='primary' type='button' onClick={()=>onDelete(drink)}>&#10004;</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

DrinkDetails.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  drink: PropTypes.object.isRequired
}

export default DrinkDetails;