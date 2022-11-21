"use client";

import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
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
			<div className="flex flex-col items-center justify-between h-screen gap-3 px-6 text-center -mt-14">
				{/* Top */}
				<div className="flex flex-col gap-4 mt-[35vh] sm:mt-[40vh]">
					{/* Name */}
					<a className="font-mono text-4xl font-bold sm:text-6xl text-slate-300">
						{config.hero.header}
					</a>

					{/* Typewriter */}
					<a className="flex flex-wrap justify-center text-lg text-center text-slate-400 sm:text-3xl">
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
											className={`flex gap-2 px-4 sm:px-7 py-2 sm:py-3 text-md sm:text-lg rounded-full text-slate-400 ${
												button.primary
													? "bg-slate-900"
													: "h-11 sm:h-[3.25rem] border border-slate-700"
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

				{/* Bouncing Arrow */}
				<a className="mb-20 cursor-pointer animate-bounce" href="#intro">
					<ArrowSmallDownIcon className="text-slate-500/70" width={32} />
				</a>
			</div>
		</FadeUpAnimation>
	);
}
