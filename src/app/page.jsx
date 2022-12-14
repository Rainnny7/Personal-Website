import Discord from "../components/discord";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Skills from "../components/skills";
import Work from "../components/work";
import config from "../config";
import FadeUpAnimation from "../util/animation/fadeUpAnimation";

/**
 * The home page.
 * @returns {JSX.Element} The home page.
 */
export default async function Home() {
	return (
		<div className="relative flex flex-col flex-wrap justify-center">
			{config.hero && <Hero />}
			<div id="intro" className="flex flex-col mt-24">
				<FadeUpAnimation>
					<div className="flex flex-col items-center gap-24 p-10 sm:gap-4 sm:items-start justify-evenly sm:flex-row">
						{config.discordId && <Discord />}
						{config.intro && <Intro />}
					</div>
				</FadeUpAnimation>
				<div className="flex flex-col w-full max-w-4xl p-10 mx-auto mt-48 gap-72">
					{config.skills && <Skills />}
					{config.work && <Work />}
				</div>
			</div>
		</div>
	);
}
