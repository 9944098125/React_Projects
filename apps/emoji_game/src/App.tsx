import React, { useState } from "react";
import EMOJIS from "./collections/emojis";
import "./App.css";

import { shuffleEmojis } from "./utils/shuffle";
import Button from "./components/Button";
import Result from "./components/Result";

export interface Emoji {
  id: string;
  name: string;
  src: string;
}

type GameStatus = "playing" | "win" | "lose";

const EmojiMemoryGame: React.FC = () => {
  const [clickedIds, setClickedIds] = useState<string[]>([]);
  const [status, setStatus] = useState<GameStatus>("playing");
  const [clickCount, setClickCount] = useState<number>(0);
  const [shuffledEmojis, setShuffledEmojis] = useState<Emoji[]>(() =>
    shuffleEmojis(EMOJIS),
  );

  const handleEmojiClick = (id: string) => {
    if (status !== "playing") return;

    setClickCount((prev) => prev + 1);

    // already clicked -> lose
    if (clickedIds.includes(id)) {
      setStatus("lose");
      // still reshuffle to keep it chaotic
      setShuffledEmojis((prev) => shuffleEmojis(prev));
      return;
    }

    const updated = [...clickedIds, id];
    setClickedIds(updated);

    if (updated.length === EMOJIS.length) {
      // all 12 unique -> win
      setStatus("win");
      setShuffledEmojis((prev) => shuffleEmojis(prev));
    } else {
      // keep playing, reshuffle for next round
      setShuffledEmojis((prev) => shuffleEmojis(prev));
    }
  };

  const handleReset = () => {
    setClickedIds([]);
    setStatus("playing");
    setClickCount(0);
    setShuffledEmojis(shuffleEmojis(EMOJIS));
  };

  return (
    <>
      <div
        style={{
          backgroundColor:
            status === "win"
              ? "#E6FFE6"
              : status === "lose"
                ? "#FFD6D7"
                : "white",
        }}
        className="h-screen flex flex-col items-center justify-center"
      >
        <h1 className="text-[2.5rem] font-bold">Emoji Memory Game</h1>
        <p className="my-4 text-center">
          Click emojis one by one. You must click all the 12 emojis to win.
        </p>
        <div className="w-full md:w-1/2 grid grid-cols-12 border-2 border-yellow-400 rounded-[1.8rem] shadow-lg gap-5 p-10">
          {shuffledEmojis.map((emoji) => {
            return (
              <Button
                emoji={emoji}
                handleEmojiClick={handleEmojiClick}
                key={emoji.id}
              />
            );
          })}
        </div>

        <div className="mt-5">
          <span>Clicks:{clickCount}</span>
        </div>

        <Result status={status} handleReset={handleReset} />
      </div>
    </>
  );
};

export default EmojiMemoryGame;
