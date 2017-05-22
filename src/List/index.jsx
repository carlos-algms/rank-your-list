import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from './components/List';
import AddNewItemButton from './components/AddNewItemButton';

function ListScene() {
  return (
    <div>

      <List />

      <p>
        <AddNewItemButton />
      </p>

      <p>
        <Link
          to="/rank"
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
        >
          <i className="material-icons">flag</i>
          Start Ranking
        </Link>
      </p>
    </div>
  );
}


export default connect()(ListScene);

