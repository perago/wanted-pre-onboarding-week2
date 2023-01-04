export interface IssueState {
  timestamp: number;
  title: string;
  content: string;
  state: string;
  deadline: Date;
  assignee: string;
}