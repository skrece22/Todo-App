import React from "react";
import { Grid, Form, Button, Header, Icon, Message } from "semantic-ui-react";

const SignupPage = () => (
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column as="div" style={{ maxWidth: 450 }}>
      <Header as="h2">
        <Icon name="user" />
        Sign Up
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
        Alread have a account! <a href="/">Login</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default SignupPage;
