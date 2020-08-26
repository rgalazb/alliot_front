import React from 'react';
import { RequestForm, Request, Container, Column, Columns, Box } from '../components'

function RequestList() {
  return (
    <div>
      <Container>
        <Columns>
          <Column offset="3" size="half">
            <RequestForm />
            <Request />
            <Request />
            <Request />
            <Request />
          </Column>
        </Columns>
      </Container>
    </div>
  );
}

export default RequestList;
