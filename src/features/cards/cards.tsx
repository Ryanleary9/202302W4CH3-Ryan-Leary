import { useState } from "react";
import { CardStructure } from "./models/card";
import { CHARLIST } from "../charmock/charmock";
import React from "react";

export function Cards() {
  return (
    <div>
      {CHARLIST.map((char) => {
        return (
          <Card
            rank={char.rank}
            name={char.name}
            bloodline={char.bloodline}
            age={char.age}
            weapon={char.weapon}
            ability={char.ability}
            loyalty={char.loyalty}
            asesorada={char.asesorada}
            serving={char.serving}
            picture={""}
            life={true}
          />
        );
      })}
    </div>
  );
}

const Card = ({
  rank,
  name,
  bloodline,
  age,
  weapon,
  ability,
  loyalty,
  asesorada,
  serving,
}: CardStructure) => {
  return (
    <div className="card_main">
      <p>Rank: {rank}</p>
      <p>Name: {name}</p>
      <p>Bloodline: {bloodline}</p>
      <p>Age: {age}</p>
      {weapon && <p>Weapon: {weapon}</p>}
      {ability && <p>Ability: {ability}</p>}
      {loyalty && <p>Loyalty: {loyalty}</p>}
      {asesorada && <p>Asesorada: {asesorada}</p>}
      {serving && <p>Serving: {serving}</p>}
    </div>
  );
};

export default Card;
