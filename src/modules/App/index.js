import React, { Component } from 'react';
import styled from 'styled-components';

import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import Search from '../Search';
import Movie from '../Movie';

const StyledContainer = styled(Container)`
  height: 80vh;
  margin-top: 100px;
  border-radius: 20px;
  background-color: white;
`;

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <Row style={{ height: '100%' }}>
          <Col>
            <Search />
          </Col>
          <Col>
            <Movie />
          </Col>
        </Row>
      </StyledContainer>
    );
  }
}

export default App;
