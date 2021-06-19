import styled from "styled-components";

export const Component = styled.div`
  background: var(--black);
  transition: all 200ms ease-in-out;
  padding: 4em 0;
  display: flex;
  justify-content: center;

  h1 {
    font-family: Verdana;
    white-space: nowrap;
    width: 6em;
    overflow: hidden;
    animation: 1s typing steps(50, end) infinite;
  }
`;
