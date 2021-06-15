import { useState } from "react";
import { Container } from "./styles";

export const MenuIcon = () => {
  const [transform, setTransform] = useState(0);

  return (
    <>
      <Container
        type="button"
        className="container"
        onClick={() => {
          transform === 0 ? setTransform(1) : setTransform(0);
        }}
      >
        <div className={transform === 0 ? "bar1" : "bar1 change"}></div>
        <div className={transform === 0 ? "bar2" : "bar2 change"}></div>
        <div className={transform === 0 ? "bar3" : "bar3 change"}></div>
      </Container>
      <h1>{transform}</h1>
    </>
  );
};
