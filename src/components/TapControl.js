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
  const { currentPage } = props.display;

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

  let pageToDisplay;
  switch(currentPage) {
    case d.INDEX:
      pageToDisplay = <DrinkList />
      break;
    case d.DETAILS:
      pageToDisplay = <DrinkDetails />
      break;
    case d.CREATE:
      pageToDisplay = <AddDrink
        onAddingDrink = {handleAddingDrink} />
      break;
    case d.EDIT:
      pageToDisplay = <EditDrink
        onEditDrink = {handleAddingDrink}
        drinkId = {props.display.currentDrinkId} />
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
  display: PropTypes.object
}

const mapStateToProps = (state) => {
  return ({
    display: state['display']
  })
}

export default connect(mapStateToProps)(TapControl);