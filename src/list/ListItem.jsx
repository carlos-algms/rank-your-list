import React from 'react';
import PropTypes from 'prop-types';


export default function PollsListItem(props) {
  const poll = props.poll;
  return (
    <li className="mdl-list__item mdl-list__item--two-line">
      <i className="material-icons mdl-list__item-avatar">format_list_bulleted</i>

      <div className="mdl-list__item-primary-content">
        <div>{poll.question}</div>
        <div className="mdl-list__item-sub-title mdl-grid" />
      </div>
    </li>
  );
}


PollsListItem.propTypes = {
  poll: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string
  }).isRequired
};
