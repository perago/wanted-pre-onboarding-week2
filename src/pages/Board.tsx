import React from 'react';
import styled from 'styled-components';

import { ISSUE_STATE } from '../constants/constants';

import Issue from '../components/Issue';

const Board = () => {
  return (
    <Wrapper>
      {ISSUE_STATE.map((item, idx) => {
        return (
          <section key={idx}>
            <header>{item}</header>
            <>
              <Issue />
            </>
          </section>
        );
      })}
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  margin: 0 auto;

  max-width: 1200px;
`;
