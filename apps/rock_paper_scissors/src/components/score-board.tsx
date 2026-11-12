import React from "react";

export default function ScoreBoard({ score }: { score: number }) {
	return (
		<React.Fragment>
			{/* SCORE BOARD */}
			<div className="w-4/5 px-5 rounded-2xl border-2 border-cyan-600 min-h-[10rem] bg-gray-700 flex flex-col md:flex-row items-center justify-between">
				<div className="p-2 text-white rounded-[.8rem] font-[800] flex flex-col space-y-4 text-[1.6rem]">
					<p>ROCK</p>
					<p>PAPER</p>
					<p>SCISSORS</p>
				</div>
				<div className="p-2 flex flex-col space-y-4 text-white rounded-[.8rem] font-[800] text-[1.6rem]">
					<p>Score</p>
					<p>{score}</p>
				</div>
			</div>
		</React.Fragment>
	);
}
