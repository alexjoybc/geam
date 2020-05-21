import React from 'react';

export default function IssueCard({ issue: { id, title, state } }) {
  return (
    <div>
      {id} - {title} - {state}
    </div>
  );
}
