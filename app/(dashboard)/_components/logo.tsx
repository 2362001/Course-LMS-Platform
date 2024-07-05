import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg"

const Logo = () => {
  return <Image height={130} width={130} alt="logo" src={logo} />;
};

export default Logo;
