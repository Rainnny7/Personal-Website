"use client";

import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

export function AppProvider({ children }) {
	return (
		<SkeletonTheme baseColor="#202020" highlightColor="#444">
			{children}
		</SkeletonTheme>
	);
}
