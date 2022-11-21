import { ClipboardIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import config from "../config";
import Card, { CardIcon } from "./card";

export default function Skills() {
	return (
		<div id="skills" className="w-full">
			<Card className="px-4 pb-8 mx-auto cursor-default">
				{/* Icon */}
				<CardIcon className="w-20 h-20 mx-auto my-7">
					<ClipboardIcon className="text-white" width={72} height={72} />
				</CardIcon>

				{/* Header */}
				<h1 className="mt-3 text-3xl font-bold text-white">Skills</h1>

				{/* Skills */}
				<div className="flex flex-wrap justify-center max-w-2xl gap-3 mt-7">
					{config.skills.map((skill, index) => {
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
	);
}
