import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import DrinkListCard from './DrinkListCard';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

function DrinkList(props) {
  const { dispatch, drinkList } = props;
  const handleChangingQuantity = (amount, id) => dispatch(a.changeQuantity(amount, id));
  return (
    <React.Fragment>
      <CardColumns>
        {drinkList.map(drink => 
          <DrinkListCard
            onLinkClick={()=>dispatch(a.viewDetails(drink.id))}
            onChangingQuantity={handleChangingQuantity}
            drink={drink}
            key={drink.id} />)}
      </CardColumns>
      <Button variant='success' type='button' size='lg' block onClick={()=>dispatch(a.create())}>Add Drink</Button>
    </React.Fragment>
  )
}

DrinkList.propTypes = {
  onChangingQuantity: PropTypes.func.isRequired,
  drinkList: PropTypes.arrayOf(Object).isRequired
}

const mapStateToProps = (state) => {
  return ({
    drinkList: Object.values(state['drinkList'])
  })
}

export default connect(mapStateToProps)(DrinkList);