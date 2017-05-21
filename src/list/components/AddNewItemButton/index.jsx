import { connect } from 'react-redux';

import { listItemAdd } from '../../ListActions';
import AddNewItemButtonComponent from './AddNewButtonComponent';


const mapDispatchToProps = dispatch => ({
  handleAddNewItem: () => { dispatch(listItemAdd()); }
});


export default connect(null, mapDispatchToProps)(AddNewItemButtonComponent);
