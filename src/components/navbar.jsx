import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * The navbar component.
 * <p>
 * This component is rendered onto all pages.
 * </p>
 * @returns {JSX.Element} The navbar component.
 */
export default function Navbar() {
	return (
		<div className="flex items-center justify-between p-6 border-b-2 sm:justify-evenly h-14 border-slate-100/10">
			{/* Title */}
			<Link className="flex gap-2 text-lg font-bold text-slate-200" href={"/"}>
				<Image
					className="rounded-full"
					src="/logo.png"
					alt="Rainnny"
					width={24}
					height={24}
					unoptimized
				/>
				<span className="hidden sm:flex">RainnnyCLUB</span>
			</Link>

			{/* Socials */}
			<div className="flex gap-2">
				{/* GitHub */}
				<Link href="https://github.com/Rainnny7">
					<Image
						src="https://img.icons8.com/nolan/2x/github.png"
						alt="Github"
						width={32}
						height={32}
						unoptimized
					/>
				</Link>

				{/* Discord */}
				<Link href="https://discord.gg/p9gzFE2bc6">
					<Image
						src="https://img.icons8.com/nolan/2x/discord-logo.png"
						alt="Github"
						width={32}
						height={32}
						unoptimized
					/>
				</Link>

				{/* Email */}
				<Link href="mailto:braydonrainnny@gmail.com">
					<Image
						src="https://img.icons8.com/nolan/2x/new-post.png"
						alt="Email"
						width={32}
						height={32}
						unoptimized
					/>
				</Link>
			</div>
		</div>
	);
}
