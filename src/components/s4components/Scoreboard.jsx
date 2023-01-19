import "./Scoreboard.style.scss";

import { collection, query, onSnapshot } from "firebase/firestore";

import { useEffect, useState } from "react";

import { db } from "../../firebase/configFirebase";

const Scoreboard = () => {
  const [dbPlayers, setDbPlayers] = useState();

  useEffect(() => {
    const q = query(collection(db, "players"));
    const unsub = onSnapshot(q, (dbElements) => {
      const playersDbArr = [];
      dbElements.forEach((player) => {
        playersDbArr.push(player.data());
      });
      setDbPlayers(playersDbArr);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <h2>Scoreboard</h2>
      <div className="players">
        <div className="header">
          <p>Player</p>
          <p>Score</p>
        </div>
        {dbPlayers &&
          dbPlayers.map((elm) => {
            return (
              <div className="player" key={elm.displayName}>
                <p>{elm.displayName}</p>
                <p>{elm.score}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Scoreboard;
