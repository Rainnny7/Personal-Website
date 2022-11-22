import moment from "moment/moment";

const now = moment(Date.now());
const birthday = moment([2002, 10, 13]);
const startedWork = moment([2016, 8, 1]);

const config = {
	seo: {
		title: "RainnnyCLUB",
		description: "My name is Braydon and I am a self-taught software engineer",
		url: "https://rainnny.club",
		image: "/logo.png",
	},
	navbar: {
		logo: "/logo.png",
		title: "RainnnyCLUB",
	},
	socials: [
		{
			name: "Github",
			icon: "https://img.icons8.com/nolan/2x/github.png",
			link: "https://github.com/Rainnny7",
		},
		{
			name: "Discord",
			icon: "https://img.icons8.com/nolan/2x/discord-logo.png",
			link: "https://discord.gg/p9gzFE2bc6",
		},
		{
			name: "Email",
			icon: "https://img.icons8.com/nolan/2x/new-post.png",
			link: "mailto:braydonrainnny@gmail.com",
		},
	],
	hero: {
		header: "Braydon Rainnny",
		text: ["Java Software Engineer", "System Administrator"],
		buttons: [
			{
				text: "My Work",
				icon: "https://img.icons8.com/nolan/2x/monitor.png",
				link: "#work",
				primary: true,
			},
			{
				text: "Skills",
				icon: "https://img.icons8.com/nolan/2x/hammer.png",
				link: "#skills",
			},
		],
	},
	discordId: "504147739131641857",
	intro: {
		header: "Hi there, I'm Braydon",
		working_since: 1472727282,
		bio: (
			<>
				A{" "}
				<code data-tip={now.diff(birthday, "years", true)}>
					{now.diff(birthday, "years")} year old
				</code>{" "}
				passionate software engineer living in <b>Canada</b>, I primarily work
				with the Java programming language and have{" "}
				<code data-tip={"Since " + startedWork.format("MMMM Do YYYY")}>
					{startedWork.fromNow(true)}
				</code>{" "}
				of experience.
			</>
		),
		image: "/me.jpg",
	},
	skills: {
		header: "Skills",
		description:
			"Here is a list of the skills I have aquired over my time as a software engineer.",
		skills: [
			// Languages
			{
				name: "Java",
				icon: "https://img.icons8.com/color/2x/java-coffee-cup-logo.png",
				link: "https://www.java.com",
			},
			{
				name: "JavaScript",
				icon: "https://img.icons8.com/fluent/2x/javascript.png",
				link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			},
			{
				name: "CSS",
				icon: "https://img.icons8.com/fluent/2x/css3.png",
				link: "https://www.w3schools.com/css",
			},

			// Operating Systems
			{
				name: "Linux",
				icon: "https://img.icons8.com/color/2x/linux.png",
				link: "https://www.linux.org",
			},
			{
				name: "Bash",
				icon: "https://img.icons8.com/color/2x/bash.png",
				link: "https://www.gnu.org/software/bash",
			},

			// Databases
			{
				name: "MariaDB",
				icon: "https://img.icons8.com/fluent/2x/maria-db.png",
				link: "https://mariadb.org",
			},
			{
				name: "MongoDB",
				icon: "https://img.icons8.com/color/2x/mongodb.png",
				link: "https://www.mongodb.com",
			},
			{
				name: "Redis",
				icon: "https://img.icons8.com/color/2x/redis.png",
				link: "https://redis.io",
			},

			// Software
			{
				name: "Git",
				icon: "https://img.icons8.com/color/2x/git.png",
				link: "https://git-scm.com",
			},
			{
				name: "Docker",
				icon: "https://img.icons8.com/fluent/2x/docker.png",
				link: "https://www.docker.com",
			},
			{
				name: "Jenkins",
				icon: "https://img.icons8.com/color/2x/jenkins.png",
				link: "https://www.jenkins.io",
			},
			{
				name: "Figma",
				icon: "https://img.icons8.com/fluent/2x/figma.png",
				link: "https://www.figma.com",
			},
			{
				name: "Postman",
				icon: "https://img.icons8.com/dusk/2x/postman-api.png",
				link: "https://www.postman.com",
			},

			// Frameworks & Libraries
			{
				name: "Maven",
				icon: "/skills/maven.png",
				link: "https://maven.apache.org",
			},
			{
				name: "NPM",
				icon: "https://img.icons8.com/color/2x/npm.png",
				link: "https://www.npmjs.com",
			},
			{
				name: "React",
				icon: "https://img.icons8.com/dusk/2x/react.png",
				link: "https://reactjs.org/",
			},
			{
				name: "NextJS",
				icon: "https://img.icons8.com/color/2x/nextjs.png",
				link: "https://nextjs.org/",
			},
			{
				name: "TailwindCSS",
				icon: "https://img.icons8.com/color/2x/tailwindcss.png",
				link: "https://tailwindcss.com",
			},
			{
				name: "Redux",
				icon: "https://img.icons8.com/color/2x/redux.png",
				link: "https://redux.js.org",
			},
			{
				name: "Nginx",
				icon: "https://img.icons8.com/color/2x/nginx.png",
				link: "https://www.nginx.com",
			},
		],
	},
	work: {
		header: "My Work",
		description: "Here are some of my past and current jobs.",
		dateFormat: "MMM YYYY",
		jobs: [
			{
				name: "WildNetwork",
				description:
					"WildNetwork is a Minecraft server that contains multiple gamemodes, one of which is Prison, which is the most popular. I first joined the server as a Developer where I would work behind the scenes to create new features, now I'm currently working as a System Administrator.",
				logo: "/jobs/wildnetwork.png",
				link: "https://www.wildprison.net",
				time: {
					from: [2020, 7, 1],
				},
			},
			{
				name: "Lucity",
				description:
					"Lucity is a minigame network for the game Minecraft, and is owned by the YouTuber iamLucid. I am currently the development lead where I mainly focus on infrastructure, databases, and monitoring systems. A few things that I have made - a dynamically managed server system, proxy rotation via the TCPShield API, and an API that can interact with the entire network from a normal Java app.",
				logo: "/jobs/lucity.png",
				link: "https://www.youtube.com/@iamLucid",
				time: {
					from: [2021, 10, 1],
				},
			},
			{
				name: "Soda",
				description:
					"The newest, most modern, and safest way to socialize. Soda is a social media platform I'm currently working on in my free time for portfolio.",
				logo: "/jobs/soda.png",
				link: "https://sodaapp.net",
				time: {
					from: [2022, 8, 1],
				},
			},
			{
				name: "Rainplex",
				description:
					"Rainplex is a remake of the once popular Minecraft server, Mineplex. Rainplex initially came to light using the plugin, Skript where it just contained a Hub. After some time, the entirety of the network was re-coded in the Java programming from the ground up. Rainplex went through numerous re-codes over the time it was active, however I have since abandoned development due to lack of free time.",
				logo: "/jobs/rainplex.png",
				time: {
					from: [2018, 8, 1],
					to: [2021, 6, 11],
				},
			},
			{
				name: "Arcane",
				description:
					"Arcane is the all-in-one Minecraft mod pack. This client was built to be similar to LunarClient for portfolio and experience sake. I have since abandoned development due to lack of free time.",
				logo: "/jobs/arcane.png",
				link: "https://github.com/ArcaneClientNET",
				time: {
					from: [2021, 6, 1],
					to: [2021, 7, 1],
				},
			},
		],
	},
	footer: [
		{
			text: <span>rainnny.club ©️ {new Date().getFullYear()}</span>,
			link: "https://rainnny.club",
		},
		{
			text: <span>Made with ❤️ by Rainnny</span>,
			link: "https://github.com/Rainnny7/personal-website",
		},
	],
};

export default config;
