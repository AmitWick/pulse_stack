import { IssueEventModel, IssueEventType } from "./issueEvent.model.js";

export const issueEventBulkInserted = (data: IssueEventType[]) => {
  return IssueEventModel.insertMany(data);
};
