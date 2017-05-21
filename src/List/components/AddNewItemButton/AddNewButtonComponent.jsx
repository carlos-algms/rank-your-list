import React from 'react';
import PropTypes from 'prop-types';


export default AddNewItemButtonComponent;


function AddNewItemButtonComponent(props) {
  return (
    <button
      type="button"
      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      onClick={props.handleAddNewItem}
    >
      Add new item
    </button>
  );
}


AddNewItemButtonComponent.propTypes = {
  handleAddNewItem: PropTypes.func.isRequired
};
