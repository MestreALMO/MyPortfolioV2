import { Components, Options } from "./styles";

export const Navbar = () => {
  return (
    <>
      <Components>
        {/* <h1>André Lusegardis</h1> */}

        <Options>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Portfolio</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </Options>
      </Components>
    </>
  );
};
