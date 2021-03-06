import { connect } from 'react-redux';

import ListItemComponent from './ListItemComponent';
import { listItemDelete, listItemAdd } from '../../../ListActions';


export default connect(null, mapDispatchToProps)(ListItemComponent);


function mapDispatchToProps(dispatch) {
  return {
    onDeleteItem: (item) => { dispatch(listItemDelete(item)); },
    handleEnterKey: (event) => {
      if (event.key === 'Enter') {
        dispatch(listItemAdd());
      }
    }
  };
}
