import React from 'react'
import { Card } from './index'

export default function({ request }) {
  return (
    <div>
      <Card
        title={request.title}
        description={request.description}
        author={request.author}
        comments={request.comments}
      />
    </div>
  );
}
