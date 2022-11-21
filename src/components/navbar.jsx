"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import config from "../config";
import ScaleUpHoverAnimation from "../util/animation/scaleUpHoverAnimation";

/**
 * The navbar component.
 * This component is rendered onto all pages.
 * @returns {JSX.Element} The navbar component.
 */
export default function Navbar() {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between p-6 border-b-2 backdrop-blur-md sm:justify-around h-14 border-slate-600/10">
			{/* Title */}
			<Link
				className="flex gap-2 text-lg font-bold transition ease-in-out delay-100 text-slate-200 hover:opacity-80"
				href={"/"}
			>
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
								<motion.div
									key="modal"
									initial={{
										opacity: 0,
										y: -30,
									}}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											y: {
												duration: index * 0.5,
											},
										},
									}}
								>
									<Image
										src={social.icon}
										alt={social.name}
										width={32}
										height={32}
										unoptimized
									/>
								</motion.div>
							</ScaleUpHoverAnimation>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
