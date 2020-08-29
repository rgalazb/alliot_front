import React from 'react'
import { Card } from './index'

export default function({ request, requests, addRequest }) {
  return (
    <div>
      <Card
        title={request.title}
        description={request.description}
        likes={request.likes}
        dislikes={request.dislikes}
        author={request.author}
        comments={request.comments}
        requests={requests}
        addRequest={addRequest}
        requestId={request.id}
      />
    </div>
  );
}
