"use client";

import { motion } from "framer-motion";

/**
 * A fade up animation.
 * @description The children of this animation will slowly fade up and appear.
 * @param {*} children The children to animate.
 */
export default function FadeUpAnimation({ children }) {
	return (
		<motion.div
			key="modal"
			initial={{
				opacity: 0,
				y: 50,
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					y: {
						duration: 0.7,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
