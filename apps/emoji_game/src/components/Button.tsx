import React from "react";

type Props = {
  emoji: {
    id: string;
    name: string;
    src: string;
  };
  handleEmojiClick: (id: string) => void;
};

export default function Button({ emoji, handleEmojiClick }: Props) {
  return (
    <React.Fragment>
      <button
        key={emoji.id}
        onClick={() => handleEmojiClick(emoji.id)}
        className="col-span-3 h-30 w-30 cursor-pointer"
      >
        <img
          src={emoji.src}
          alt={emoji.name}
          className="h-full w-full object-contain"
        />
      </button>
    </React.Fragment>
  );
}
