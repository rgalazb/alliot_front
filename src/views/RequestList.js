import React, { useState, useEffect } from 'react';
import RequestService from '../services/RequestService'
import getToken from '../utils/getToken'
import { RequestForm, Request, Container, Column, Columns } from '../components'

function RequestList() {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    RequestService
      .getRequests(getToken())
      .then(({ data }) => {
        setRequests(data);
      })
      .catch((err) => console.log(err));
  }, [])

  const handleClick = function(filter) {
    switch(filter) {
      case 'likes':
        setRequests([...requests.sort(((prev, curr) => curr.likes - prev.likes))])
        return;
      case 'dislikes':
        setRequests([...requests.sort(((prev, curr) => curr.dislikes - prev.dislikes))])
        return;
      case 'title':
        setRequests([...requests.sort(((prev, curr) => {
         if (curr.title >= prev.title) return -1
         return 1
        }))])
        return;
      default:
        return;
    }
  }

  return (
    <div>
      <Container>
        <Columns>
          <Column offset="3" size="half">
            <RequestForm requests={requests} addRequest={setRequests} />
            <div className="button-group mt-4">
                <p>Ordenar Por: </p>
                <button className="button is-success ml-2 filters-btn" onClick={() => handleClick('likes')}>
                  Likes
                </button>
                <button className="button is-danger ml-2 filters-btn" onClick={() => handleClick('dislikes')}>
                  Dislikes
                </button>
                <button className="button is-info ml-2 filters-btn" onClick={() => handleClick('title')}>
                  Alfabeticamente
                </button>
            </div>
            {requests.map(request => 
               <Request key={`r-${request.id}`} request={request} requests={requests} addRequest={setRequests} />
            )}
          </Column>
        </Columns>
      </Container>
    </div>
  );
}

export default RequestList;
