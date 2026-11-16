import React from "react";

type Props = {
  status: string;
  handleReset: () => void;
};
export default function Result({ status, handleReset }: Props) {
  return (
    <React.Fragment>
      {status !== "playing" && (
        <>
          <div className="mt-5 p-8 rounded-[1.8rem] shadow-lg text-center">
            {status === "win"
              ? "You have won the game"
              : "You have lost the game"}
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              onClick={handleReset}
              className="px-8 py-4 bg-gray-600 text-white cursor-pointer rounded-xl"
            >
              Replay
            </button>
          </div>
        </>
      )}
    </React.Fragment>
  );
}
