import React from 'react';
import styled from 'styled-components';

import { IssueState } from '../types/types';

const issueInfo: IssueState = JSON.parse(localStorage.getItem('issue') || '{}');

const Issue = () => {
  return (
    <Wrapper>
      <div>
        <span>{issueInfo.title} </span>
        <span>{issueInfo.content}</span>
      </div>
      <div>
        <span>{issueInfo.state} </span>
        <span>{issueInfo.deadline.toString().slice(0, 16).replace('T', ' ')}</span>
      </div>
    </Wrapper>
  );
};

export default Issue;

const Wrapper = styled.section`
  border: 2px solid blue;
  border-radius: 10px;
`;
