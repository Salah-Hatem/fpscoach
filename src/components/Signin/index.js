import React from "react";
import Icon1 from "../../images/Sign-bg.jpg";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  Form,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container img={Icon1}>
        <Icon to="/">FPS Coach</Icon>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email"></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password"></FormInput>
              <FormButton type="submit">Continue</FormButton>
              <Text>Frogot Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
