import React from "react";
import { Grid, Message } from "semantic-ui-react";

const NotFoundPage = () => (
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column as="div" style={{ maxWidth: 450 }}>
      <Message error size="large">
        <Message.Header content="404 Page Not Found!"/>
        Click here to go back!<a href="/">home</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default NotFoundPage;
