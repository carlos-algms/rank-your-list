import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Loading from '../../App/components/Loading';
import Ranker from '../services/ranker';


export default class RankPageComponent extends Component {

  static propTypes = {
    rankStart: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired
  };

  componentDidMount() {
    this.props.rankStart();
  }

  componentDidUpdate() {
    const { list, history } = this.props;
    if (!list.length) {
      history.push('/');
    }

    this.ranker = Ranker(list);
  }

  render() {
    const haveLength = !!this.props.list.length;
    const component = !haveLength ? (<Loading />) : (
      <h1>
        Rank page
      </h1>
    );

    return component;
  }
}
