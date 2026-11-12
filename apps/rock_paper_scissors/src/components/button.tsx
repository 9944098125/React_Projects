import React from "react";

type Props = {
	buttonDetails: {
		id: string;
		image: string;
	};
	clickButton: (id: string, image: string) => void;
};

export default function Button(props: Props) {
	const { buttonDetails, clickButton } = props;

	return (
		<React.Fragment>
			<div className="w-2/4 my-5 flex items-center justify-center">
				<button
					onClick={() => clickButton(buttonDetails?.id, buttonDetails?.image)}
					className="rounded-full cursor-pointer h-[15rem] w-[15rem]">
					<img src={buttonDetails?.image} alt={buttonDetails?.id} />
				</button>
			</div>
		</React.Fragment>
	);
}
