import React, { useState } from "react";
import EMOJIS from "./collections/emojis";

interface Emoji {
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
      <h1 className="text-green-600 font-extrabold text-2xl">
        Emoji Memory Game
      </h1>
    </>
  );
};

export default EmojiMemoryGame;
