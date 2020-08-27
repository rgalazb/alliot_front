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
        console.log(data)
        setRequests(data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div>
      <Container>
        <Columns>
          <Column offset="3" size="half">
            <RequestForm />
            <Request />
          </Column>
        </Columns>
      </Container>
    </div>
  );
}

export default RequestList;
