import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RankPage from './components/RankPageComponent';
import { rankStart } from './RankActions';


const mapStateToProps = state => ({
  list: state.rank.list || []
});

const mapDispatchToProps = dispatch => ({
  rankStart: () => dispatch(rankStart())
});


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RankPage)
);
