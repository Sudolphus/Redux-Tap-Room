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

class TapControl extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLinks = (page, drinkId = null) => {
    const { dispatch } = this.props;
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

  handleAddingDrink = (newDrink) => {
    const { dispatch } = this.props;
    dispatch(a.addDrink(newDrink));
    this.handleLinks('index');
  }

  handleDeleteDrink = (deleteDrink) => {
    const { dispatch } = this.props;
    dispatch(a.deleteDrink(deleteDrink.id));
    this.handleLinks('index');
  }

  handleChangeDrinksRemaining = (drink, amount) => {
    const { dispatch } = this.props;
    dispatch(a.changeQuantity(amount, drink.id));
    this.handleLinks('index');
  }

  render() {
    const { currentPage, currentDrinkId } = this.props.display;
    let pageToDisplay;
    switch(currentPage) {
      case d.INDEX:
        pageToDisplay = <DrinkList
          onLinkClick={this.handleLinks}
          onChangingQuantity = {this.handleChangeDrinksRemaining}
          drinkList={Object.values(this.props.drinkList)} /> 
        break;
      case d.DETAILS:
        pageToDisplay = <DrinkDetails
          onLinkClick = {this.handleLinks}
          onDelete = {this.handleDeleteDrink}
          drink = {this.props.drinkList[currentDrinkId]} />
        break;
      case d.CREATE:
        pageToDisplay = <AddDrink
          onLinkClick = {this.handleLinks}
          onAddingDrink = {this.handleAddingDrink} />
        break;
      case d.EDIT:
        pageToDisplay = <EditDrink
          onLinkClick = {this.handleLinks}
          onEditDrink = {this.handleAddingDrink}
          drink = {this.props.drinkList[currentDrinkId]} />
        break;
      default:
        pageToDisplay = <ErrorPage
          onLinkClick = {this.handleLinks} />;
    }

    return (
      <React.Fragment>
        <Navigator
          onLinkClick = {this.handleLinks} />
        {pageToDisplay}
      </React.Fragment>
    )
  }
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