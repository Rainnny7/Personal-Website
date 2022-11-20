import Discord from "../components/discord";
import Hero from "../components/hero";
import Intro from "../components/intro";

export default async function Home() {
	return (
		<div className="flex flex-col flex-wrap justify-center mt-48 sm:mt-56">
			<Hero />
			<div className="flex flex-col items-center gap-24 p-10 mt-48 sm:gap-4 sm:items-start justify-evenly sm:flex-row">
				<Discord />
				<Intro />
			</div>
		</div>
	);
}
