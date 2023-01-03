import React, { ChangeEvent, useState } from 'react'

import { ISSUE_STATE } from '../constants/constants';

const [TODO, IN_PROGRESS, COMPLETED] = ISSUE_STATE;
interface IssueState {
  timestamp: number,
  title: string,
  content: string,
  state: string,
  deadline: Date,
  assignee: string
}

const CreateTask = () => {
  const [issue, setIssue] = useState<IssueState>({
    timestamp: Date.now(),
    title: "title",
    content: "content",
    state: TODO,
    deadline: new Date(+new Date() + 3240 * 10000),
    assignee: "assignee",
  });

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...issue, title: e.target.value });
  }
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIssue({ ...issue, content: e.target.value });
  };
  const onChangeDeadline = (e: ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...issue, deadline: new Date(e.target.value) });
  }
  const onChangeIssueState = (e: ChangeEvent<HTMLSelectElement>) => {
    setIssue({ ...issue, state: e.target.value });
  };
  const onPublishIssue = () => {
    localStorage.setItem("issue", JSON.stringify(issue));
    console.info(issue);
  }
  return (
    <article>
      <input
        type="text"
        onChange={onChangeTitle}
        value={issue.title}
      />
      <textarea onChange={onChangeContent} value={issue.content} />
      <input
        type="datetime-local"
        onChange={onChangeDeadline}
        value={issue.deadline.toISOString().slice(0, 16)}
      />
      {/* 담당자 */}
      <select onChange={onChangeIssueState}  defaultValue={issue.state}>
        <option value={TODO}>{TODO}</option>
        <option value={IN_PROGRESS}>{IN_PROGRESS}</option>
        <option value={COMPLETED}>{COMPLETED}</option>
      </select>
      <button
        type="button"
        onClick={onPublishIssue}
      >
        발행
      </button>
    </article>
  );
}

export default CreateTask