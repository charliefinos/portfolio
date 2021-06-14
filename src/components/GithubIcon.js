import React from "react";
import { DiGitBranch } from "react-icons/di";

const GithubIcon = ({ link }) => {
  return (
    <a rel="noreferrer" target="_blank" href={link}>
      <DiGitBranch />
    </a>
  );
};

export default GithubIcon;
