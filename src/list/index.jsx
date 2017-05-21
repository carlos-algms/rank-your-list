import React from 'react';
import { connect } from 'react-redux';

import List from './components/List';
import AddNewItemButton from './components/AddNewItemButton';

function ListScene() {
  return (
    <div>
      <List />
      <AddNewItemButton />
    </div>
  );
}


export default connect()(ListScene);

