import React, { Component } from 'react';
import PropTypes from 'prop-types';


import ListItem from './ListItem/index';


export default class ListComponent extends Component {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    listCreate: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.listCreate();
  }

  render() {
    const list = this.props.list;

    return (
      <ul className="mdl-list list">
        {list.map(item => (<ListItem key={item.id} item={item} />))}
      </ul>
    );
  }
}
