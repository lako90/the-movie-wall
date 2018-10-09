import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from 'reactstrap/lib/Input';
import ListGroup from 'reactstrap/lib/ListGroup';

import SearchResult from '../../components/SearchResult';

import searchAction from './actions';

const Container = styled.div`
  padding: 50px 30px;
  height: 100%;
`;

const ResultContainer = styled.div`
  margin-top: 50px;
  overflow: auto;
  max-height: calc(100% - 100px);
`;

class Search extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    loading: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.inputSearch = React.createRef();
  }

  handleSearch = () => {
    const { search } = this.props;

    search(this.inputSearch.current.value);
  }

  renderList = results => (
    <ListGroup>
      {results.map(result => <SearchResult data={result} />)}
    </ListGroup>
  )

  render() {
    const { results, loading } = this.props;

    return (
      <Container>
        <Input
          placeholder={'Search a movie'}
          innerRef={this.inputSearch}
          onChange={this.handleSearch}
        />
        <ResultContainer>
          {
            results
              ? this.renderList(results)
              : null
          }
          {
            loading
              ? 'searching...'
              : null
          }
        </ResultContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ searchMovies: { data, loading } }) => ({
  results: data.results || data,
  loading,
});
const mapDispatchToProps = dispatch => ({
  search: bindActionCreators(searchAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
