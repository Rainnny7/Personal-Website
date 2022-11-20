"use client";

import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

/**
 * The top hero section.
 * @returns {JSX.Element} The hero section.
 */
export default function Hero() {
	return (
		<div className="flex flex-col gap-3 px-6 text-center">
			{/* Name */}
			<a className="text-4xl font-bold text-slate-300">Braydon Rainnny</a>

			{/* Typewriter */}
			<a className="flex flex-wrap justify-center font-serif text-xl text-center text-slate-400 md:text-3xl">
				<span className="mr-2">I am a</span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter.pauseFor(2500).deleteAll().start();
					}}
					options={{
						strings: ["Java Software Engineer", "System Administrator"],
						autoStart: true,
						loop: true,
						delay: 110,
					}}
				/>
			</a>

			{/* Buttons */}
			<div className="flex justify-center gap-4 mt-12">
				{/* My Work */}
				<Link href="#myWork">
					<button className="flex gap-1 px-5 py-2 text-lg transition duration-300 ease-in-out delay-150 rounded-full bg-slate-400 hover:-translate-y-1 hover:scale-95">
						<ComputerDesktopIcon width={32} height={32} />
						My Work
					</button>
				</Link>
			</div>
		</div>
	);
}
