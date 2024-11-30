import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #cbdfef, 0 2px 5px 0 rgba(200, 216, 249, 0.959);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  min-height: 400px;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${({ signingIn }) =>
    !signingIn &&
    `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${({ signingIn }) => !signingIn && `transform: translateX(100%);`}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${({ signingIn }) => !signingIn && `transform: translateX(-100%);`}
`;

export const Overlay = styled.div`
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ signingIn }) => !signingIn && `transform: translateX(50%);`}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${({ signingIn }) => !signingIn && `transform: translateX(0);`}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${({ signingIn }) => !signingIn && `transform: translateX(20%);`}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

function Signup() {
  const [signIn, setSignIn] = React.useState(true);

  return (
    <Container>
      <SignUpContainer signingIn={signIn}>
        <Form>
          <Title>Create Account</Title>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign Up</Button>
        </Form>
      </SignUpContainer>
      <SignInContainer signingIn={signIn}>
        <Form>
          <Title>Sign in</Title>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button>Sign In</Button>
        </Form>
      </SignInContainer>
      <OverlayContainer signingIn={signIn}>
        <Overlay signingIn={signIn}>
          <LeftOverlayPanel signingIn={signIn}>
            <Title>Welcome Back!</Title>
            <Paragraph>To keep connected with us, please log in!</Paragraph>
            <GhostButton onClick={() => setSignIn(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>
          <RightOverlayPanel signingIn={signIn}>
            <Title>Hello, Friend!</Title>
            <Paragraph>Enter your details to start your journey!</Paragraph>
            <GhostButton onClick={() => setSignIn(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

export default Signup;
