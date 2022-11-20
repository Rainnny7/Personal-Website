import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en" dir="auto">
			<head />
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
