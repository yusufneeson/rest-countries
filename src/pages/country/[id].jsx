import Container from "../../components/Container/Container";
import HomeLayout from "../../layout/HomeLayout";

function Country({ country, borders }) {
	return (
		<HomeLayout title={`Country of ${country.name}`}>
			<Container country={country} borders={borders} />
		</HomeLayout>
	);
}

export default Country;

export async function getStaticPaths() {
	const res = await fetch("https://restcountries.com/v2/all");
	const countries = await res.json();
	const paths = countries.map((country) => ({
		params: {
			id: country.alpha3Code,
		},
	}));
	return {
		paths,
		fallback: "blocking",
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://restcountries.com/v2/alpha/${params.id}?fields=flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`
	);
	const country = await res.json();
	let countryBorderDataArr = [];
	if (country.borders && country.borders.length > 0) {
		const countryBorder = country.borders.join(",");
		const countryBorderRes = await fetch(
			`https://restcountries.com/v2/alpha?codes=${countryBorder}&fields=name,alpha3Code`
		);
		const countryBorderData = await countryBorderRes.json();
		countryBorderDataArr = countryBorderData.map((country) => {
			return {
				name: country.name,
				code: country.alpha3Code,
			};
		});
	}

	return {
		props: {
			country,
			borders: countryBorderDataArr,
		},
	};
}
