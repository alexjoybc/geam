import React from 'react';

export default function Issue({ issue: { id, title, state } }) {
  return (
    <div>
      {id} - {title} - {state}
    </div>
  );
}
