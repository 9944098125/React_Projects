import React from "react";

type Props = {
	values: {
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
	reset: () => void;
};
export default function ResultView(props: Props) {
	const { values, reset } = props;
	return (
		<React.Fragment>
			<div className="w-full">
				<div className="flex flex-col md:flex-row md:justify-between items-center">
					<div className="w-2/4 my-5 flex items-center justify-center">
						<button className="rounded-full cursor-pointer h-[15rem] w-[15rem]">
							<img src={values.myChoice?.image} alt={values.myChoice?.id} />
						</button>
					</div>

					<div className="w-2/4 my-5 flex items-center justify-center">
						<button className="rounded-full cursor-pointer h-[15rem] w-[15rem]">
							<img
								src={values.opponentChoice?.image}
								alt={values.opponentChoice?.id}
							/>
						</button>
					</div>
				</div>
				<div>
					<p className="text-[1.4rem] font-[600]">
						Result Message: {values.resultMessage}
					</p>
					<button
						onClick={reset}
						className="py-4 px-6 rounded-[.8rem] mt-4 cursor-pointer bg-cyan-600 border-0 text-white">
						Play Again
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}
