import Image from "next/image";
import Link from "next/link";
import React from "react";
import config from "../config";
import ScaleUpHoverAnimation from "../util/animation/scaleUpHoverAnimation";

/**
 * The navbar component.
 * <p>
 * This component is rendered onto all pages.
 * </p>
 * @returns {JSX.Element} The navbar component.
 */
export default function Navbar() {
	return (
		<nav className="flex items-center justify-between p-6 border-b-2 sm:justify-evenly h-14 border-slate-100/10">
			{/* Title */}
			<Link className="flex gap-2 text-lg font-bold text-slate-200" href={"/"}>
				<Image
					className="rounded-full"
					src={config.navbar.logo}
					alt={config.navbar.title}
					width={24}
					height={24}
					unoptimized
				/>
				<span className="hidden sm:flex">{config.navbar.title}</span>
			</Link>

			{/* Socials */}
			<div className="flex gap-2">
				{config.socials.map((social, index) => {
					return (
						<Link key={index} href={social.link}>
							<ScaleUpHoverAnimation>
								<Image
									src={social.icon}
									alt={social.name}
									width={32}
									height={32}
									unoptimized
								/>
							</ScaleUpHoverAnimation>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
