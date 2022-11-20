"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import config from "../config";
import ScaleUpHoverAnimation from "../util/animation/scaleUpHoverAnimation";

/**
 * The top hero component.
 * @description This component is displayed at the top of the page.
 * @returns {JSX.Element} The hero component.
 */
export default function Hero() {
	return (
		<div className="flex flex-col gap-3 px-6 text-center">
			{/* Name */}
			<a className="text-4xl font-bold text-slate-300">{config.hero.header}</a>

			{/* Typewriter */}
			<a className="flex flex-wrap justify-center text-xl text-center text-slate-400 md:text-3xl">
				<span className="mr-2">I am a</span>
				<Typewriter
					onInit={(typewriter) => {
						typewriter.pauseFor(2500).deleteAll().start();
					}}
					options={{
						strings: config.hero.text,
						autoStart: true,
						loop: true,
						delay: 110,
					}}
				/>
			</a>

			{/* Buttons */}
			<div className="flex justify-center gap-4 mt-12">
				{config.hero.buttons.map((button, index) => {
					return (
						<a key={index} href={button.link}>
							<ScaleUpHoverAnimation>
								<button
									className={`flex gap-2 px-5 py-2 text-lg rounded-full text-slate-400 ${
										button.primary
											? "bg-slate-900"
											: "border-2 border-slate-700"
									}`}
								>
									{button.icon && (
										<Image
											src={button.icon}
											alt={button.text + " Button"}
											width={28}
											height={28}
											unoptimized
										/>
									)}
									<span>{button.text}</span>
								</button>
							</ScaleUpHoverAnimation>
						</a>
					);
				})}
				;
			</div>
		</div>
	);
}
