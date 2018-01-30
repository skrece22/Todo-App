import React from "react";
import { Grid, Form, Button, Header, Icon, Message } from "semantic-ui-react";

const LoginPage = () => (
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column as="div" style={{ maxWidth: 450 }}>
      <Header as="h2">
        <Icon name="user" />
        Login to your account
      </Header>
      <Form size="large" onSubmit={e => console.log(e)}>
        <Form.Input
          fluid
          icon="at"
          iconPosition="left"
          placeholder="E-mail address"
          type="email"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
        />
        <Button color="vk" type="submit">
          Login
        </Button>
      </Form>
      <Message>
        New here! <a href="/signup">Signup</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginPage;
