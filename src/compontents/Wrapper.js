import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  background: #fff;
  max-width: 100%;
  list-style-type: none;
  grid-gap: 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    max-width: 60%;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const WrapItem = styled.li`
  margin: 0 auto;
`;
