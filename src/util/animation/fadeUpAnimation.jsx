"use client";

import { motion } from "framer-motion";

/**
 * A fade up animation.
 * @description The children of this animation will slowly fade up and appear.
 * @param {JSX.Element} children The children to animate.
 */
export default function FadeUpAnimation(props) {
	const y = props.y || 50;
	const duration = props.duration || 0.7;
	return (
		<motion.div
			key="modal"
			initial={{
				opacity: 0,
				y: y,
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					y: {
						duration: duration,
					},
				},
			}}
		>
			{props.children}
		</motion.div>
	);
}
