import React from 'react';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import * as d from './DisplayTypes';
import PropTypes from 'prop-types';
import DrinkList from './DrinkList';
import DrinkDetails from './DrinkDetails';
import AddDrink from './AddDrink';
import EditDrink from './EditDrink';
import ErrorPage from './ErrorPage';
import Navigator from './Navigator';

function TapControl(props) {
  const { dispatch } = props;
  
  const handleLinks = (page, drinkId = null) => {
    if (page === d.INDEX) {
      dispatch(a.viewIndex());
    } else if (page === d.DETAILS) {
      dispatch(a.viewDetails(drinkId));
    } else if (page === d.CREATE) {
      dispatch(a.create());
    } else if (page === d.EDIT) {
      dispatch(a.edit(drinkId));
    }
  }

  const handleAddingDrink = (newDrink) => {
    dispatch(a.addDrink(newDrink));
    handleLinks(d.INDEX);
  }

  const handleDeleteDrink = (deleteDrink) => {
    dispatch(a.deleteDrink(deleteDrink.id));
    handleLinks(d.INDEX);
  }

  const handleChangeDrinksRemaining = (drink, amount) => {
    dispatch(a.changeQuantity(amount, drink.id));
    handleLinks(d.INDEX);
  }

  const { currentPage, currentDrinkId } = props.display;
  let pageToDisplay;
  switch(currentPage) {
    case d.INDEX:
      pageToDisplay = <DrinkList
        onLinkClick={handleLinks}
        onChangingQuantity = {handleChangeDrinksRemaining}
        drinkList={Object.values(props.drinkList)} /> 
      break;
    case d.DETAILS:
      pageToDisplay = <DrinkDetails
        onLinkClick = {handleLinks}
        onDelete = {handleDeleteDrink}
        drink = {props.drinkList[`${currentDrinkId}`]} />
      break;
    case d.CREATE:
      pageToDisplay = <AddDrink
        onLinkClick = {handleLinks}
        onAddingDrink = {handleAddingDrink} />
      break;
    case d.EDIT:
      pageToDisplay = <EditDrink
        onLinkClick = {handleLinks}
        onEditDrink = {handleAddingDrink}
        drink = {props.drinkList[`${currentDrinkId}`]} />
      break;
    default:
      pageToDisplay = <ErrorPage
        onLinkClick = {handleLinks} />;
  }

  return (
    <React.Fragment>
      <Navigator
        onLinkClick = {handleLinks} />
      {pageToDisplay}
    </React.Fragment>
  )
}


TapControl.propTypes = {
  drinkList: PropTypes.object,
  display: PropTypes.object
}

const mapStateToProps = (state) => {
  return ({
    drinkList: state['drinkList'],
    display: state['display']
  })
}

export default connect(mapStateToProps)(TapControl);