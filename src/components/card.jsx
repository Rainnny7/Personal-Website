import React from "react";
import ScaleUpHoverAnimation from "../util/animation/scaleUpHoverAnimation";

function Card(props) {
	return (
		<ScaleUpHoverAnimation>
			<div className="relative rounded-xl bg-gradient-to-br from-blue-700 via-purple-600/10 to-red-700 p-0.5 before:absolute before:inset-0 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-500 before:via-purple-500/30 before:to-red-500 before:blur-3xl">
				<div className="relative z-10 w-full h-full px-2 py-2 bg-black rounded-xl before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br before:from-blue-900/25 before:via-black before:to-red-900/25">
					<div className="flex flex-col flex-wrap overflow-hidden text-center break-words">
						<div {...props}>{props.children}</div>
					</div>
				</div>
			</div>
		</ScaleUpHoverAnimation>
	);
}

export default Card;
