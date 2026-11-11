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
			<div className="w-2/4">
				<button
					onClick={() => clickButton(buttonDetails?.id, buttonDetails?.image)}
					className="rounded-full h-[10rem] w-[10rem]">
					<img src={buttonDetails?.image} alt={buttonDetails?.id} />
				</button>
			</div>
		</React.Fragment>
	);
}
