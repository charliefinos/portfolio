import React from "react";
import GithubIcon from "./GithubIcon";
import LiveIcon from "./LiveIcon";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img alt={item.title} src={item.photo}></img>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="card__icons">
        <GithubIcon link={item.github_link} />
        <LiveIcon link={item.live_link} />
      </div>
    </div>
  );
};

export default Card;
