import React from "react";
import config from "../config";

/**
 * The footer component.
 * This component is rendered onto all pages.
 * @returns {JSX.Element} The footer component.
 */
export default function Footer() {
	return (
		<footer className="flex justify-between px-6 pb-5 mt-20 text-sm text-center sm:text-base gap-7 opacity-80 text-slate-500">
			{config.footer.map((footer, index) => {
				return (
					<a key={index} href={footer.link}>
						{footer.text}
					</a>
				);
			})}
		</footer>
	);
}
