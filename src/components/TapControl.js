import React from 'react';
import { connect } from 'react-redux';
import * as a from './../actions/index';
import * as d from './DisplayTypes';
import PropTypes from 'prop-types';
import DrinkList from './DrinkList';
import DrinkDetails from './DrinkDetails';
import DrinkForm from './DrinkForm';
import ErrorPage from './ErrorPage';
import Navigator from './Navigator';

function TapControl(props) {
  const { dispatch } = props;
  const { currentPage } = props.display;

  let pageToDisplay;
  if (currentPage === d.INDEX) {
    pageToDisplay = <DrinkList />
  } else if (currentPage === d.DETAILS) {
    pageToDisplay = <DrinkDetails />
  } else if (currentPage === d.CREATE) {
    pageToDisplay = <DrinkForm />
  } else if (currentPage === d.EDIT) {
    pageToDisplay = <DrinkForm drinkId = {props.display.currentDrinkId} />
  } else {
    pageToDisplay = <ErrorPage onLinkClick = {()=>dispatch(a.viewIndex())} />
  }

  return (
    <React.Fragment>
      <Navigator
        onIndexClick = {()=>dispatch(a.viewIndex())}
        onCreateClick = {()=>dispatch(a.create())} />
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