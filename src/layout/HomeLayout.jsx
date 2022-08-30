import Head from "next/head";

function HomeLayout(props) {
	const { title = "", children } = props;
	return (
		<>
			<Head>
				<title>{title ? `${title} |` : ""} Next.js Countries</title>
				<meta
					name="description"
					content="List all countries using REST API with Next.js by Yusuf Neeson"
				/>
				<meta name="keywords" content="next.js, countries, rest, api" />
				<meta name="author" content="Yusuf Neeson" />
			</Head>
			{children}
		</>
	);
}

export default HomeLayout;
