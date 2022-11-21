import React from "react";

/**
 * The background pattern component.
 * @see https://heropatterns.com
 * @returns {JSX.Element} The background component.
 */
export default function BackgroundPattern() {
	return (
		<div className="absolute inset-0 h-screen shadow-xl backgroundPattern">
			<div className="absolute left-0 right-0 blur-3xl bottom-[-0.75rem] h-7" />
		</div>
	);
}
