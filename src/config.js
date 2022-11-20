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
