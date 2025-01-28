import React from "react";
import styled from "styled-components";
import Header from "../component/Header";


export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #cbdfef, 0 2px 5px 0 rgba(200, 216, 249, 0.959);
  position: relative;
  overflow: hidden;
  width: 80%;
  max-width: 100%;
  height: 400px; /* Adjust this if necessary */
  margin: 120px auto;
  padding: 50px;

  /* Mobile View */
  @media (max-width: 768px) {
    background: transparent;
    flex-direction: column;
    width: 100%;
    height: 100% !important;
    box-shadow: none;
    padding: 20px;
    margin: 0;
    padding-top: 150px;

  }
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

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    transform: translateY(${({ signingIn }) => (signingIn ? "100%" : "0")});
    opacity: ${({ signingIn }) => (signingIn ? 0 : 1)};
    height: auto;
    display: ${({ signingIn }) => (signingIn ? "none" : "block")};
  }
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${({ signingIn }) =>
    !signingIn &&
    `
    transform: translateX(100%);
  `}

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    transform: translateY(${({ signingIn }) => (signingIn ? "0" : "100%")});
    opacity: ${({ signingIn }) => (signingIn ? 1 : 0)};
    height: auto;
    display: ${({ signingIn }) => (signingIn ? "block" : "none")};
  }
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

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

export const Title = styled.h3`
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
  border-radius: 15px;
  border: none;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  width: 50%;
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

export const MobileToggleLink = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #0b51e8;
  text-decoration: underline;

  @media (min-width: 769px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  background: linear-gradient(to right, #051a47, #0b51e8);
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
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  // text-align: center;
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
    <>
      <Header />
      <Container>
        <OverlayContainer signingIn={signIn}>
          <Overlay signingIn={signIn}>
            <LeftOverlayPanel signingIn={signIn}>
              <Title>Welcome to BGP MFI </Title>
              <Paragraph>Enter your details to start your journey!</Paragraph>
              <Button onClick={() => setSignIn(true)}>Sign In</Button>
            </LeftOverlayPanel>
            <RightOverlayPanel signingIn={signIn}>
              <Title>Welcome back to Best Global Payment Institute</Title>
              <Paragraph>To keep connected with us, please log in!</Paragraph>
              <Button onClick={() => setSignIn(false)}>Sign Up</Button>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
        <SignInContainer signingIn={signIn}>
          <Form>
            <Title>Sign in</Title>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign In</Button>
            <MobileToggleLink onClick={() => setSignIn(false)}>
              Don't have an account? Sign Up
            </MobileToggleLink>
          </Form>
        </SignInContainer>
        <SignUpContainer signingIn={signIn}>
          <Form>
            <Title>Create Account</Title>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
            <MobileToggleLink onClick={() => setSignIn(true)}>
              Already have an account? Sign In
            </MobileToggleLink>
          </Form>
        </SignUpContainer>
        
      </Container>
    </>
  );
}

export default Signup;
