import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { ISSUE_STATE, ASSIGNEE } from '../constants/constants';
import { IssueState } from '../types/types';

const [TODO, IN_PROGRESS, COMPLETED] = ISSUE_STATE;

const CreateTask = () => {
  const [issue, setIssue] = useState<IssueState>({
    timestamp: Date.now(),
    title: 'title',
    content: 'content',
    state: TODO,
    deadline: new Date(+new Date() + 3240 * 10000),
    assignee: 'assignee',
  });

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...issue, title: e.target.value });
  };
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIssue({ ...issue, content: e.target.value });
  };
  const onChangeDeadline = (e: ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...issue, deadline: new Date(e.target.value) });
  };
  const onChangeIssueState = (e: ChangeEvent<HTMLSelectElement>) => {
    setIssue({ ...issue, state: e.target.value });
  };
  const onChangeAssignee = (e: ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...issue, assignee: e.target.value });
  };
  const onPublishIssue = () => {
    localStorage.setItem('issue', JSON.stringify(issue));
    console.info(issue);
  };
  return (
    <Wrapper>
      <input type="text" onChange={onChangeTitle} value={issue.title} />
      <textarea onChange={onChangeContent} value={issue.content} />
      <input
        type="datetime-local"
        onChange={onChangeDeadline}
        value={issue.deadline.toISOString().slice(0, 16)}
      />
      <input type="text" onChange={onChangeAssignee} />
      {ASSIGNEE.filter(item => item.includes(issue.assignee)).map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
      <select onChange={onChangeIssueState} defaultValue={issue.state}>
        <option value={TODO}>{TODO}</option>
        <option value={IN_PROGRESS}>{IN_PROGRESS}</option>
        <option value={COMPLETED}>{COMPLETED}</option>
      </select>
      <button type="button" onClick={onPublishIssue}>
        발행
      </button>
    </Wrapper>
  );
};

export default CreateTask;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
