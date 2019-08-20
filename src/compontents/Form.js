import styled from "styled-components";

export const StyledForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormInput = styled.input`
  border: 1px solid #333;
  padding: 0.85rem 0.45rem;
  width: 100%;
  margin-top: 1rem;
  color: #000;
  font-size: 1rem;
`;

export const FormButton = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  background: #333;
  margin-top: 1rem;
  padding: 0.85rem 0.45rem;
  transition: background 0.2s ease-in;
  font-size: 1.25rem;

  &:hover {
    background: #222;
  }
`;
