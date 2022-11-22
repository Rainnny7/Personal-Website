import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import config from "../config";
import "./globals.css";
import { AppProvider } from "./provider";

/**
 * The root page layout.
 * @returns {JSX.Element} The root page layout.
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en" dir="auto">
			<head />
			<body>
				<AppProvider>
					{config.navbar && <Navbar />}
					{children}
					{config.footer && <Footer />}
				</AppProvider>
			</body>
		</html>
	);
}
