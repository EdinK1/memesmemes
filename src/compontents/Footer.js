import React from "react";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #f4f4f4;
  color: #000;
  padding: 1rem 0;
  margin-top: 200px;
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 1.1rem;
`;

export const Footer = () => (
  <StyledFooter>
    <Copyright>
      Created with{" "}
      <span role='img' aria-label='hidden'>
        ☕
      </span>{" "}
      by Edin Kaymakqi
    </Copyright>
  </StyledFooter>
);
