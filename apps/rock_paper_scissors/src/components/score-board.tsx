import React from "react";

export default function ScoreBoard({ score }: { score: number }) {
	return (
		<React.Fragment>
			{/* SCORE BOARD */}
			<div className="w-4/5 rounded-2xl border-2 border-cyan-600 min-h-[10rem] bg-gray-700 flex items-center justify-between">
				<div className="p-5 text-white font-[800] text-[2.6rem]">
					<p>Score</p>
				</div>
				<div className="p-5 text-white font-[800] text-[2.6rem]">
					<p>{score}</p>
				</div>
			</div>
		</React.Fragment>
	);
}
