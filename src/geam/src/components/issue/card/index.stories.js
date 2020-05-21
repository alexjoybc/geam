import React from 'react';

import IssueCard from '.';

export default {
  component: IssueCard,
  title: 'Issue Card',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const issueData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX'
};


export const Default = () => <IssueCard issue={{ ...issueData }} />;
