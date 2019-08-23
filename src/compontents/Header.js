import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { Greeting } from "./Greeting";

const StyledHeader = styled.header`
  min-height: 80vh;
  display: flex;
  text-align: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = () => (
  <StyledHeader>
    <Title>Welcome to MemesMemes</Title>
    <Greeting>Pick an image and have fun creating your own meme</Greeting>
  </StyledHeader>
);
