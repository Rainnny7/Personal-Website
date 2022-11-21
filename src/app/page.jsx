import BackgroundPattern from "../components/background";
import Discord from "../components/discord";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Skills from "../components/skills";
import Work from "../components/work";

/**
 * The home page.
 * @returns {JSX.Element} The home page.
 */
export default async function Home() {
	return (
		<>
			<BackgroundPattern />
			<div className="relative flex flex-col flex-wrap justify-center mt-48 sm:mt-56">
				<Hero />
				<div className="flex flex-col mt-48">
					<div className="flex flex-col items-center gap-24 p-10 sm:gap-4 sm:items-start justify-evenly sm:flex-row">
						<Discord />
						<Intro />
					</div>
					<div className="flex flex-col w-full max-w-5xl p-10 mx-auto mt-48 gap-72">
						<Skills />
						<Work />
					</div>
				</div>
			</div>
		</>
	);
}
