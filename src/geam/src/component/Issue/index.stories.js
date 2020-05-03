import React from 'react';
import { action } from '@storybook/addon-actions';

import Issue from '.';

export default {
  component: Issue,
  title: 'Issue',
  decorators: [
    story => (
      <div style={{ padding: "3rem" }} class="row"><div class="col-6">{story()}</div></div>
    )
  ],
  excludeStories: /.*Data$/,
};

export const issueData = {
  id: '1',
  title: 'Test Task',
  description: 'Some details'
};

export const actionsData = {
    onEditIssue: action('onEditIssue'),
    onArchiveTask: action('onArchiveTask'),
  };
  
export const Default = () => <Issue issue={{ ...issueData }} {...actionsData} />;
