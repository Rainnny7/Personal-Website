import moment from "moment/moment";

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
		],
	},
	discord_id: "504147739131641857",
	intro: {
		header: "Hi there, I'm Braydon",
		working_since: 1472727282,
		bio: (
			<>
				A{" "}
				<code>
					{new Date().getFullYear() - moment([2002, 11, 13]).year()} year old
				</code>{" "}
				passionate software engineer living in <b>Canada</b>, I primarily work
				with the Java programming language and have{" "}
				<code>{moment([2016, 9, 1]).fromNow(true)}</code> of experience.
			</>
		),
		image: "/me.jpg",
	},
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
			icon: "/maven.png",
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
	footer: [
		{
			text: "rainnny.club ©️ $year",
			link: "https://rainnny.club",
		},
		{
			text: "Made with ❤️ by Rainnny",
			link: "https://github.com/Rainnny7/personal-website",
		},
	],
};

export default config;
