"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import config from "../config";
import FadeUpAnimation from "../util/animation/fadeUpAnimation";
import ScaleUpHoverAnimation from "../util/animation/scaleUpHoverAnimation";

/**
 * The top hero component.
 * @description This component is displayed at the top of the page.
 * @returns {JSX.Element} The hero component.
 */
export default function Hero() {
	return (
		<FadeUpAnimation y={70} animation={1.4}>
			<div className="flex flex-col gap-3 px-6 text-center">
				{/* Name */}
				<a className="text-5xl font-bold text-slate-300">
					{config.hero.header}
				</a>

				{/* Typewriter */}
				<a className="flex flex-wrap justify-center text-xl text-center text-slate-400 md:text-3xl">
					<span>I am a &#8203;</span>
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
				<div className="flex flex-wrap justify-center gap-4 mt-12">
					{config.hero.buttons.map((button, index) => {
						return (
							<a key={index} href={button.link}>
								<ScaleUpHoverAnimation>
									<button
										className={`flex gap-2 px-5 py-2 text-lg rounded-full text-slate-400 ${
											button.primary
												? "bg-slate-900"
												: "h-11 border border-slate-700"
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
				</div>
			</div>
		</FadeUpAnimation>
	);
}
