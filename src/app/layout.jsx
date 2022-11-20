import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import FadeUpAnimation from "../util/fadeUpAnimation";
import "./globals.css";
import { AppProvider } from "./provider";

export default function RootLayout({ children }) {
	return (
		<html lang="en" dir="auto">
			<head />
			<body>
				<AppProvider>
					<Navbar />
					<FadeUpAnimation>{children}</FadeUpAnimation>
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}
