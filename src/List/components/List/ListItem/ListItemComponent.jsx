import React, { Component } from 'react';
import PropTypes from 'prop-types';


import updateMdl from '../../../../utils/updateMdlJs';


export default class ListItemComponent extends Component {

  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired,
    onDeleteItem: PropTypes.func.isRequired
  };

  componentDidMount() {
    updateMdl(this.itemNode);
    this.itemNode.querySelector('input').focus();
  }

  render() {
    const { item } = this.props;

    return (
      <li ref={(node) => { this.itemNode = node; }} className="mdl-list__item list__item">
        <div className="mdl-list__item-primary-content">
          <button
            type="button"
            tabIndex={-1}
            className="mdl-button mdl-js-button mdl-button--icon mdl-list__item-icon"
            onClick={() => this.props.onDeleteItem(item)}
          >
            <i className="material-icons">delete_forever</i>
          </button>

          <div className="mdl-textfield mdl-js-textfield flat-textfield">
            <input className="mdl-textfield__input" type="text" id={item.id} defaultValue={item.value} />
            <label className="mdl-textfield__label" htmlFor={item.id}>Item name...</label>
          </div>
        </div>
      </li>
    );
  }
}
