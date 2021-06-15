import { Component, Options } from "./styles";
import { MenuIcon } from "../menu-icon";

export const Navbar = () => {
  return (
    <>
      <Component>
        <h1>André Lusegardis</h1>

        <Options>
          <MenuIcon />
          {/* <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul> */}
        </Options>
      </Component>
    </>
  );
};
