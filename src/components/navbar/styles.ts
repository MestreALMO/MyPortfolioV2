import styled from "styled-components";

export const Components = styled.div`
  background: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    li {
      width: 100%;

      button {
        display: flex;
        justify-content: center;
        padding: 0.6em 0.4em;
        font-size: 1.15rem;
        width: 100%;
        border: var(--black) 0.08em solid;
        border-bottom: none;
        border-radius: 40% 40% 0 0;
        color: var(--white);
        background: var(--gray-700);

        &:hover {
          color: var(--black);
          background: var(--gray-300);
        }
      }
    }
  }
`;
