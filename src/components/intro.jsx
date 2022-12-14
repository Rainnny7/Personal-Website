"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import config from "../config";
import Card, { CardIcon } from "./card";

/**
 * The intro section.
 * @description This component introduces myself to the user.
 * @returns {JSX.Element} The intro section.
 */
export default function Intro() {
	return (
		<Tilt
			className="ml-auto mr-auto md:ml-0 md:mr-0"
			perspective={2000}
			tiltMaxAngleX={7}
			tiltMaxAngleY={7}
			gyroscope
			tiltReverse
		>
			<div className="w-full">
				<Card className="px-4 pb-3 mx-auto cursor-default">
					{/* Icon */}
					<CardIcon className="w-20 h-20 mx-auto my-7">
						<Image
							className="mx-auto"
							src="/hand-wave.png"
							alt="Waving Hand"
							width={72}
							height={72}
							unoptimized
						/>
					</CardIcon>

					{/* Name & Bio */}
					<div className="flex flex-col gap-4 mt-3">
						{config.intro.header && (
							<h1 className="text-3xl font-bold text-white">
								{config.intro.header}
							</h1>
						)}
						<div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0 justify-evenly">
							{config.intro.bio && (
								<p className="max-w-md text-lg text-white/50">
									{config.intro.bio}
								</p>
							)}
							{config.intro.image && (
								<div className="relative w-24 h-24 rounded-full">
									<Image
										className="object-cover rounded-full shadow-md opacity-90 shadow-white/70"
										src={config.intro.image}
										alt="Picture of the site owner"
										unoptimized
										fill
									/>
								</div>
							)}
						</div>
					</div>
				</Card>
			</div>
		</Tilt>
	);
}
