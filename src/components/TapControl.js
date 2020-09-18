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
    this.state = {
      currentPage: 'index',
      currentDrink: null
    }
  }

  handleLinks = (page, drink = null) => {
    this.setState({
      currentPage: page,
      currentDrink: drink
    });
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
    let pageToDisplay;
    switch(this.state.currentPage) {
      case d.INDEX:
        pageToDisplay = <DrinkList
        onLinkClick={this.handleLinks}
        onChangingQuantity = {this.handleChangeDrinksRemaining}
        drinkList={this.props.drinkList} /> 
        break;
      case d.DETAILS:
        pageToDisplay = <DrinkDetails
          onLinkClick = {this.handleLinks}
          onDelete = {this.handleDeleteDrink}
          drink = {this.state.currentDrink} />
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
          drink = {this.state.currentDrink} />
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
  drinkList: PropTypes.array
}

const mapStateToProps = (state) => {
  return ({
    drinkList: Object.values(state['drinkList'])
  })
}

export default connect(mapStateToProps)(TapControl);