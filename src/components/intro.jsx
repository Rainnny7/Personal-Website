import Image from "next/image";
import React from "react";
import config from "../config";
import Card, { CardIcon } from "./card";

function Intro() {
	return (
		<div className="w-full max-w-[37rem]">
			<Card className="px-4 pb-3 mx-auto cursor-default">
				<CardIcon className="w-20 h-20 mx-auto">
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
					<h1 className="font-serif text-3xl font-bold text-white">
						{config.intro.header}
					</h1>
					<div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0 justify-evenly">
						<p className="max-w-md text-lg text-white/50">{config.intro.bio}</p>
						<div className="relative w-24 h-24 rounded-full">
							<Image
								className="object-cover rounded-full opacity-90"
								src={config.intro.image}
								alt="Picture of the site owner"
								unoptimized
								fill
							/>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default Intro;
