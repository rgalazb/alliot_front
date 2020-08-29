import React, { useState, useEffect } from 'react';
import RequestService from '../services/RequestService'
import getToken from '../utils/getToken'
import { RequestForm, Request, Container, Column, Columns, Box } from '../components'

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

  return (
    <div>
      <Container>
        <Columns>
          <Column offset="3" size="half">
            <RequestForm requests={requests} addRequest={setRequests} />
            {requests.map(request => 
               <Request key={`r-${request.id}`} request={request}/>
            )}
          </Column>
        </Columns>
      </Container>
    </div>
  );
}

export default RequestList;
