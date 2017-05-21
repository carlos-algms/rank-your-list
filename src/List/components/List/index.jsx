import { connect } from 'react-redux';


import { listCreate } from './../../ListActions';
import ListComponent from './ListComponent';


const mapStateToProps = state => ({
  list: state.list.list
});

const mapDispatchToProps = dispatch => ({
  listCreate: () => dispatch(listCreate())
});


export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
