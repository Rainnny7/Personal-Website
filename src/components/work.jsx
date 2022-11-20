import { BriefcaseIcon } from "@heroicons/react/24/outline";
import React from "react";
import Card, { CardIcon } from "./card";

function Work() {
	return (
		<div className="w-full">
			<Card className="px-4 pb-8 mx-auto cursor-default">
				<CardIcon className="w-20 h-20 mx-auto">
					<BriefcaseIcon className="text-white" width={72} height={72} />
				</CardIcon>
				<h1 className="mt-3 font-serif text-3xl font-bold text-white">
					My Work
				</h1>
				<p className="mt-3 text-lg text-white/40">
					Hello, this isn&apos;t done xx
				</p>
			</Card>
		</div>
	);
}

export default Work;
