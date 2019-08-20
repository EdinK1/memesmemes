import React from "react";
import styled from "styled-components";

const MemeImg = styled.img`
  max-width: 350px;
  max-height: 500px;
  height: auto;
  box-shadow: 3px 2px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const Meme = ({ template, onClick }) => {
  return (
    <MemeImg
      key={template.id}
      src={template.url}
      alt={template.name}
      onClick={onClick}
    />
  );
};
