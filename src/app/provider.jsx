"use client";

import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

/**
 * This is the root context provider for the application.
 * @returns {JSX.Element} The card component.
 */
export function AppProvider({ children }) {
	return (
		<SkeletonTheme baseColor="#202020" highlightColor="#444">
			{children}
		</SkeletonTheme>
	);
}
