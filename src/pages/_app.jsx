import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import nProgress from "nprogress";
import { FilterProvider } from "../context/filter.context";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		router.events.on("routeChangeStart", () => nProgress.start());
		router.events.on("routeChangeComplete", () => nProgress.done());
		router.events.on("routeChangeError", () => nProgress.done());

		return () => {
			router.events.off("routeChangeStart", () => nProgress.start());
			router.events.off("routeChangeComplete", () => nProgress.done());
			router.events.off("routeChangeError", () => nProgress.done());
		};
	}, [router]);

	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<FilterProvider>
				<Component {...pageProps} />
			</FilterProvider>
		</ThemeProvider>
	);
}

export default MyApp;
