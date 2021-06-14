import React from "react";
import { CgScreen } from "react-icons/cg";

const LiveIcon = ({ link }) => {
  return (
    <a rel="noreferrer" target="_blank" href={link}>
      <CgScreen />
    </a>
  );
};

export default LiveIcon;
