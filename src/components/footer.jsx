import React from "react";
import config from "../config";

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
		<footer className="flex justify-between px-6 pb-5 mt-10 font-serif text-center gap-7 opacity-80 text-slate-500">
			{config.footer.map((footer, index) => {
				return (
					<a key={index} href={footer.link}>
						{footer.text.replace("$year", date.getFullYear())}
					</a>
				);
			})}
		</footer>
	);
}
