import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Moon from "../components/icons/Moon";
import Sun from "../components/icons/SUn";
import style from "./homelayout.module.css";

function HomeLayout(props) {
	const { title, children } = props;
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	const isDark = theme === "dark";
	return (
		<>
			<Head>
				<title>{`${
					title ? `${title} | ` : ""
				}Next.js Countries`}</title>
				<meta
					name="description"
					content="List all countries using REST API with Next.js by Yusuf Neeson"
				/>
				<meta name="keywords" content="next.js, countries, rest, api" />
				<meta name="author" content="Yusuf Neeson" />
			</Head>
			<header className={style.header}>
				<nav className={style.nav}>
					<h1 className={style.title}>
						<Link href="/">
							<a>Where in the world ?</a>
						</Link>
					</h1>
					<div
						onClick={() => setTheme(isDark ? "light" : "dark")}
						className={style.switcher}
					>
						{mounted && (
							<>
								{isDark ? (
									<>
										<Sun className={style.icon} /> Light
										Mode
									</>
								) : (
									<>
										<Moon className={style.icon} /> Dark
										Mode
									</>
								)}
							</>
						)}
					</div>
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
}

export default HomeLayout;
