import { Component } from "./styles";
import Image from "next/image";
import imgCode from "../../../public/code.jpg";

export const Opening = () => {
  return (
    <>
      <Component>
        <Image src={imgCode} alt="image code" />
        <h1>Test</h1>
      </Component>
    </>
  );
};
