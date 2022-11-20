"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import config from "../config";
import Card from "./card";

export default function Discord() {
	const [lanyard, setLanyard] = useState();
	const [dcdn, setDCDN] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const id = config.discord_id;

		// Lanyard
		axios.get(`https://api.lanyard.rest/v1/users/${id}`).then((response) => {
			setLanyard(response.data.data);
		});
		// DCDN
		axios.get(`https://dcdn.dstn.to/profile/${id}`).then((response) => {
			setDCDN(response.data);
		});
	}, []);
	const [statusColor, setStatusColor] = useState("border-gray-500");

	// Checking when loading is complete
	useEffect(() => {
		if (lanyard && dcdn) {
			setLoading(false);

			// Getting the status color
			const status = lanyard.discord_status;
			if (status === "online") {
				setStatusColor("border-green-500");
			} else if (status === "idle") {
				setStatusColor("border-yellow-500");
			} else if (status === "dnd") {
				setStatusColor("border-red-500");
			}
		}
	}, [lanyard, dcdn]);
	const { user } = dcdn || {};

	return (
		<div className="w-full max-w-[15rem] md:max-w-[20rem]">
			<Link href={`https://discord.com/users/${config.discord_id}`}>
				<Card className="w-full h-full max-h-[19rem] mx-auto pb-3 cursor-pointer">
					{/* Banner */}
					{user?.banner ? (
						<div className="md:h-full max-h-[6.3rem]">
							<Image
								className="rounded-xl"
								src={`https://cdn.discordapp.com/banners/${user.id}/${user.banner}.jpg?size=600`}
								alt="Discord Banner"
								width={712}
								height={712}
								unoptimized
							/>
						</div>
					) : (
						<div className="mt-10" />
					)}

					{/* Avatar */}
					<div className="flex justify-center -mt-9 md:-mt-7">
						{loading ? (
							<Skeleton className="w-[5rem] h-[5rem]" circle />
						) : (
							<Image
								className={`border-2 ${statusColor} rounded-full p-[0.15rem]`}
								src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg?size=600`}
								alt="Discord Avatar"
								width={74}
								height={74}
								unoptimized
							/>
						)}
					</div>

					{/* Username & Bio */}
					<div className="px-4 mt-4 font-bold text-white">
						{loading ? (
							<div className="flex flex-col gap-4">
								<Skeleton className="w-24 h-5" />
								<Skeleton className="w-full h-12" />
							</div>
						) : (
							<div className="flex flex-col gap-4">
								{/* Username */}
								<span className="text-xl">
									{user.username}
									<span className="font-normal text-gray-300">
										#{user.discriminator}
									</span>
								</span>

								{/* Bio */}
								{user.bio && (
									<p className="font-thin text-gray-300 text-md">{user.bio}</p>
								)}
							</div>
						)}
					</div>
				</Card>
			</Link>
		</div>
	);
}
