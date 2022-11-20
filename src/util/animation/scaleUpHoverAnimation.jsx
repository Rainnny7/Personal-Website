"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * A hover scale up animation.
 * @description The children of this animation will slowly scale up when hovered over.
 * @param {*} children The children to animate.
 */
export default function ScaleUpHoverAnimation({ children }) {
	return <motion.div whileHover={{ scale: 1.02 }}>{children}</motion.div>;
}
