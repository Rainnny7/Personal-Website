import { NextSeo } from "next-seo";
import config from "../config";

export default function Head() {
	return (
		<head>
			{/* SEO */}
			<NextSeo
				title={config.seo.title}
				description={config.seo.description}
				openGraph={{
					type: "website",
					site_name: config.seo.title,
					url: config.seo.url,
					images: [
						{
							url: config.seo.image,
						},
					],
				}}
				twitter={{
					site: `@${config.seo.title}`,
					cardType: "summary",
				}}
				useAppDir={true}
			/>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<link rel="icon" href="/favicon.ico" />
			<meta name="theme-color" content={config.seo.theme} />

			{/* Analytics URL */}
			{process.env.ANALYTICS_URL && (
				<script defer src={process.env.ANALYTICS_URL} />
			)}
		</head>
	);
}
