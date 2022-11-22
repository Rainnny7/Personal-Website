"use client";

import moment from "moment/moment";
import Image from "next/image";
import React from "react";
import ReactDOMServer from "react-dom/server";
import config from "../config";
import FadeUpAnimation from "../util/animation/fadeUpAnimation";
import Card from "./card";

/**
 * The work component.
 * @description This component displays past and current work experience.
 * @returns {JSX.Element} The job component.
 */
export default function Work() {
	return (
		<FadeUpAnimation>
			<div id="work" className="w-full">
				{/* Header */}
				<div className="flex flex-col items-center text-center mb-7">
					<h1 className="font-mono text-4xl font-bold text-white">
						{config.work.header}
					</h1>
					<h3 className="max-w-md text-xl text-slate-300/60">
						{config.work.description}
					</h3>
				</div>

				{/* Work */}
				<Card className="px-4 pb-8 mx-auto cursor-default">
					<div className="flex flex-wrap justify-center max-w-2xl gap-3 mt-7">
						{config.work.jobs.map((job, index) => {
							return (
								<a
									key={index}
									href={job.link}
									data-html={true}
									data-tip={ReactDOMServer.renderToString(
										<div className="flex gap-6 text-center">
											{/* Name & Active Time */}
											<div className="flex flex-col items-center">
												<a className="text-lg font-bold">{job.name}</a>
												{/* Active Time */}
												{job.time && (
													<a
														className={`flex justify-center gap-1 text-[0.9rem] font-normal ${
															job.time.to ? "text-red-400" : "text-green-400"
														}`}
													>
														<span>
															{moment(job.time.from).format(
																config.work.dateFormat
															)}
														</span>
														<span>-</span>
														<span>
															{job.time.to
																? moment(job.time.to).format(
																		config.work.dateFormat
																  )
																: "Present"}
														</span>
													</a>
												)}
												<div className="flex items-center my-auto">
													<Image
														src={job.logo}
														alt={job.name + " Logo"}
														width={54}
														height={54}
														unoptimized
													/>
												</div>
											</div>

											{/* Description */}
											<div className="flex items-baseline">
												<p className="max-w-sm font-thin text-[0.9rem]">
													{job.description}
												</p>
											</div>
										</div>
									)}
								>
									{/* Logo */}
									<Image
										src={job.logo}
										alt={job.name + " Logo"}
										width={54}
										height={54}
										unoptimized
									/>
								</a>
							);
						})}
					</div>
				</Card>
			</div>
		</FadeUpAnimation>
	);
}
