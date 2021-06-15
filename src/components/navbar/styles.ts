import styled from "styled-components";

export const Component = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 1em;

  h1 {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;

    li {
      font-size: 1.4rem;

      & + li {
        margin-left: 0.6em;
      }
    }
  }
`;
