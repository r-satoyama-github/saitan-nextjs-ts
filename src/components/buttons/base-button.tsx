import styled from "styled-components";

export const BaseButton = styled.button`
  /* color: #fff; */
  padding: 10px 24px;
  margin-top: 20px;
  border: none;
  border-radius: 9999px;
  outline: none;
  font-size: var(--heading3);
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
