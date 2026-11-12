import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import ScoreBoard from "./components/score-board";
import ResultView from "./components/result-view";

const choices = [
	{
		id: "ROCK",
		image: "/images/rock.png",
	},
	{
		id: "PAPER",
		image: "/images/paper.png",
	},
	{
		id: "SCISSORS",
		image: "/images/scissors.png",
	},
];

type Values = {
	myChoice: {
		id: string | undefined;
		image: string | undefined;
	};
	opponentChoice: {
		id: string | undefined;
		image: string | undefined;
	};
	showResult: boolean;
	resultMessage: string | undefined;
};

function App() {
	const [values, setValues] = useState<Values>({
		myChoice: { id: undefined, image: undefined },
		opponentChoice: { id: undefined, image: undefined },
		showResult: false,
		resultMessage: undefined,
	});

	const [score, setScore] = useState<number>(0);

	function reset() {
		setValues({
			myChoice: { id: undefined, image: undefined },
			opponentChoice: { id: undefined, image: undefined },
			showResult: false,
			resultMessage: undefined,
		});
	}

	const clickButton = (id: string, image: string) => {
		const randomNumber = Math.floor(Math.random() * choices.length);
		console.log("opponent choice", choices[randomNumber]);
		if (choices[randomNumber]?.id === "SCISSORS" && id === "ROCK") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "CONGRATS, YOU WIN",
			});
			setScore((prev) => prev + 1);
		} else if (choices[randomNumber]?.id === "SCISSORS" && id === "PAPER") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "SORRY, YOU LOSE",
			});
			setScore((prev) => (prev === 0 ? 0 : prev - 1));
		} else if (choices[randomNumber]?.id === "SCISSORS" && id === "SCISSORS") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "COOL, IT'S A TIE",
			});
			setScore((prev) => prev);
		} else if (choices[randomNumber]?.id === "ROCK" && id === "ROCK") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "COOL, IT'S A TIE",
			});
			setScore((prev) => prev);
		} else if (choices[randomNumber]?.id === "ROCK" && id === "PAPER") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "CONGRATS, YOU WIN",
			});
			setScore((prev) => prev + 1);
		} else if (choices[randomNumber]?.id === "ROCK" && id === "SCISSORS") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "SORRY, YOU LOSE",
			});
			setScore((prev) => (prev === 0 ? 0 : prev - 1));
		} else if (choices[randomNumber]?.id === "PAPER" && id === "ROCK") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "SORRY, YOU LOSE",
			});
			setScore((prev) => (prev === 0 ? 0 : prev - 1));
		} else if (choices[randomNumber]?.id === "PAPER" && id === "SCISSORS") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "CONGRATS, YOU WIN",
			});
			setScore((prev) => prev + 1);
		} else if (choices[randomNumber]?.id === "PAPER" && id === "PAPER") {
			setValues({
				showResult: true,
				myChoice: { id, image },
				opponentChoice: choices[randomNumber],
				resultMessage: "COOL, IT'S A TIE",
			});
			setScore((prev) => prev);
		}
	};
	return (
		<>
			<div className="w-full min-h-screen bg-black flex flex-col items-center p-10">
				<ScoreBoard score={score} />
				<div className="w-full mt-10 flex flex-wrap items-center justify-center">
					{values.showResult ? (
						<ResultView values={values} reset={reset} />
					) : (
						choices?.map((i) => {
							return <Button buttonDetails={i} clickButton={clickButton} />;
						})
					)}
				</div>
			</div>
		</>
	);
}

export default App;
