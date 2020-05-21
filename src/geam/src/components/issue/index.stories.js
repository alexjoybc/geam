import React from 'react';

import Issue from '.';

export default {
  component: Issue,
  title: 'Issue',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const issueData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX'
};


export const Default = () => <Issue issue={{ ...issueData }} />;
