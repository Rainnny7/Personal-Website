import Image from "next/image";
import Link from "next/link";
import React from "react";
import config from "../config";
import FadeUpAnimation from "../util/animation/fadeUpAnimation";
import Card from "./card";

export default function Skills() {
	return (
		<FadeUpAnimation>
			<div id="skills" className="w-full">
				{/* Header */}
				<div className="flex flex-col items-center text-center mb-7">
					<h1 className="font-mono text-4xl font-bold text-white">
						{config.skills.header}
					</h1>
					<h3 className="max-w-md text-xl text-slate-300/60">
						{config.skills.description}
					</h3>
				</div>

				{/* Skills */}
				<Card className="px-4 pb-8 mx-auto cursor-default">
					{/* Skills */}
					<div className="flex flex-wrap justify-center max-w-2xl gap-3 mt-7">
						{config.skills.skills.map((skill, index) => {
							return (
								<Link key={index} href={skill.link}>
									<Image
										src={skill.icon}
										alt={skill.name}
										data-tip={skill.name}
										width={54}
										height={54}
										unoptimized
									/>
								</Link>
							);
						})}
					</div>
				</Card>
			</div>
		</FadeUpAnimation>
	);
}
