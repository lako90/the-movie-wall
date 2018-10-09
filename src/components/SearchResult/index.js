import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListGroupItem from 'reactstrap/lib/ListGroupItem';

class SearchResult extends Component {
  static propTypes = {
    data: PropTypes.shape().isRequired,
  }

  render() {
    const {
      data: {
        title,
        release_date: releaseDate,
      },
    } = this.props;

    return (
      <ListGroupItem>{`${title} (${releaseDate})`}</ListGroupItem>
    );
  }
}

export default SearchResult;
