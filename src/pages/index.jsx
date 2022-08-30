import Countries from "../components/Countries/Countries";
import Filter from "../components/Filter/Filter";
import HomeLayout from "../layout/HomeLayout";

export default function Index({ countries }) {
	return (
		<HomeLayout>
			<Filter />
			<Countries countries={countries} />
		</HomeLayout>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		"https://restcountries.com/v2/all?fields=flag,name,region,population,capital,alpha3Code"
	);
	const countries = await res.json();
	return {
		props: {
			countries,
		},
	};
}
