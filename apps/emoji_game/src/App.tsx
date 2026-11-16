import React, { useState } from "react";
import EMOJIS from "./collections/emojis";

export interface Emoji {
  id: string;
  name: string;
  src: string;
}

type GameStatus = "playing" | "win" | "lose";

function shuffleEmojis(list: Emoji[]): Emoji[] {
  const arr = [...list];
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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
      <div className="flex items-center justify-center">
        <h1 className="text-[2.5rem] font-bold text-yellow-400">
          Emoji Memory Game
        </h1>
        <p className="my-4 text-center">
          Click emojis one by one. You must click all the 12 emojis to win.
        </p>
        <div className="w-full md:w-1/2 grid grid-cols-12 gap-5 p-5">
          {shuffledEmojis.map((emoji) => {
            return (
              <button
                key={emoji.id}
                onClick={() => handleEmojiClick(emoji.id)}
                className="col-span-4 m-2 h-[4rem] w-[4rem] md:h-[7rem] md:w-[7rem]"
              >
                <img
                  src={emoji.src}
                  alt={emoji.name}
                  className="h-full w-full object-contain"
                />
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <span>Clicks:{clickCount}</span>
        </div>

        {status !== "playing" && (
          <div
            style={{
              backgroundColor: status === "win" ? "#14532D" : "#7F1D1D",
            }}
            className="mt-5 p-4 rounded-1rem text-white shadow-lg text-center"
          ></div>
        )}
      </div>
    </>
  );
};

export default EmojiMemoryGame;
