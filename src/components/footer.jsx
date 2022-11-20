import React from "react";

/**
 * The footer component.
 * <p>
 * This component is rendered onto all pages.
 * </p>
 * @returns {JSX.Element} The footer component.
 */
export default function Footer() {
	const date = new Date();
	return (
		<div className="absolute inset-x-0 bottom-0 flex justify-between px-6 pb-5 font-serif opacity-80 text-slate-500">
			<a href="https://rainnny.club">rainnny.club ©️ {date.getFullYear()}</a>
			<a href="https://github.com/Rainnny7/personal-website">
				Made with ❤️ by Rainnny
			</a>
		</div>
	);
}
