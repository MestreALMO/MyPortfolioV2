import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: inherit;
  display: inline-block;
  cursor: pointer;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    background-color: #c64b4b;
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px) background-color;
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    background-color: #c64b4b;
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px) background-color;
  }
`;
